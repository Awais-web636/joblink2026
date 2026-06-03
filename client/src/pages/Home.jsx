import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products, loading } = useApp();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
