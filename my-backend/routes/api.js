const express = require('express');
const router = express.Router();
const aboutRoutes = require('./about.routes');
const productRoutes = require('./product.routes');

router.use('/about', aboutRoutes);
router.use('/products', productRoutes);

module.exports = router;
