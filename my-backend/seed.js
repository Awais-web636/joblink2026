require('dotenv').config();
const mongoose = require('mongoose');
const { Product } = require('./models');

const products = [
  {
    name: 'iPhone 15 Pro Max',
    description: 'Apple\'s flagship smartphone with A17 Pro chip and titanium design.',
    price: 1199,
    image: 'https://via.placeholder.com/200?text=iPhone+15+Pro',
    isTopBrand: true,
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung\'s premium phone with built-in S Pen and AI features.',
    price: 1299,
    image: 'https://via.placeholder.com/200?text=Galaxy+S24',
    isTopBrand: true,
  },
  {
    name: 'MacBook Air M3',
    description: 'Apple\'s ultra-thin laptop with M3 chip and 18-hour battery life.',
    price: 1099,
    image: 'https://via.placeholder.com/200?text=MacBook+Air',
    isTopBrand: true,
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones.',
    price: 349,
    image: 'https://via.placeholder.com/200?text=Sony+Headphones',
    isTopBrand: true,
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable lifestyle sneaker with Max Air unit.',
    price: 150,
    image: 'https://via.placeholder.com/200?text=Nike+Air+Max',
    isTopBrand: true,
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Advanced health and fitness smartwatch with S9 chip.',
    price: 399,
    image: 'https://via.placeholder.com/200?text=Apple+Watch',
    isTopBrand: true,
  },
  {
    name: 'Dell XPS 15',
    description: 'High-performance laptop with InfinityEdge display.',
    price: 1499,
    image: 'https://via.placeholder.com/200?text=Dell+XPS',
    isTopBrand: true,
  },
  {
    name: 'Bose QuietComfort Earbuds II',
    description: 'Premium wireless earbuds with customizable noise canceling.',
    price: 279,
    image: 'https://via.placeholder.com/200?text=Bose+Earbuds',
    isTopBrand: true,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const inserted = await Product.insertMany(products);
    console.log(`Seeded ${inserted.length} products`);

    await mongoose.disconnect();
    console.log('Done');
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seed();
