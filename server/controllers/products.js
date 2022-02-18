const asyncHandler = require('express-async-handler');

const products = require('../model/products.js');

const getProducts = asyncHandler(async (req, res) => {
  const result = await products.getProducts();
  res.status(200).json(result);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const result = await products.deleteProduct(req.params.barcode);
  res.status(200).json(result);
});

module.exports = { getProducts, deleteProduct };
