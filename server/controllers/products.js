const asyncHandler = require('express-async-handler');

const products = require('../model/products.js');

const getProducts = asyncHandler(async (req, res) => {
  const result = await products.getProducts();
  res.status(200).json(result);
});

module.exports = { getProducts };
