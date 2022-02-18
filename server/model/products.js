/* eslint-disable eqeqeq */
let products = require('./products.json');

function getProducts() {
  return products;
}

function deleteProduct(barcode) {
  const delProd = products.find((el) => el.barcode == barcode);
  if (delProd) {
    products = products.filter((el) => el.barcode != barcode);
  }
  return `Product with the Barcode ${barcode} has been deleted`;
}

module.exports = { getProducts, deleteProduct };
