const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      title: 'About Us',
      description: 'We are a trusted e-commerce platform providing high-quality products from top brands at competitive prices.'
    }
  });
});

module.exports = router;
