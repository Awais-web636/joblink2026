const { Product } = require('../models');

const getTopBrands = async (req, res) => {
  try {
    const products = await Product.find({ isTopBrand: true });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getTopBrands };
