const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image || 'https://via.placeholder.com/200'}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="text-amber-600 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
