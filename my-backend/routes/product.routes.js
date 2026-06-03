const express = require('express');
const router = express.Router();
const { getTopBrands } = require('../controllers');

router.get('/top-brands', getTopBrands);

module.exports = router;
