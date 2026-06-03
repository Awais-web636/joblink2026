import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function Products() {
  return <h1 className="text-3xl font-bold">Products Page</h1>;
}

function Contact() {
  return <h1 className="text-3xl font-bold">Contact Page</h1>;
}

function App() {
  return (
    <AppProvider>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
