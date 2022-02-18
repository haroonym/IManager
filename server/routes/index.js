const express = require('express');

const { getProducts, deleteProduct, postProduct } = require('../controllers/products.js');

const router = express.Router();

router.get('/products', getProducts);
router.delete('/products/:barcode', deleteProduct);
router.post('/products', postProduct);

module.exports = router;
