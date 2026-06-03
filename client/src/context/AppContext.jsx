import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, aboutRes] = await Promise.all([
          api.get('/products/top-brands'),
          api.get('/about'),
        ]);
        setProducts(productsRes.data.products);
        setAbout(aboutRes.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ products, about, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
