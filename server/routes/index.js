const express = require('express');

const { getProducts, deleteProduct } = require('../controllers/products.js');

const router = express.Router();

router.get('/products', getProducts);
router.delete('/products/:barcode', deleteProduct);

module.exports = router;
