const products = require('./products.json');

function getProducts() {
  return products;
}

module.exports = { getProducts };
