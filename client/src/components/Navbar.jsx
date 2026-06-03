import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex gap-6">
        <Link to="/" className="hover:text-amber-400">Home</Link>
        <Link to="/products" className="hover:text-amber-400">Products</Link>
        <Link to="/about" className="hover:text-amber-400">About Us</Link>
        <Link to="/contact" className="hover:text-amber-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
