
const salesModel = require('../models/salesModels');
const productsModels = require('../models/productsModels');

const checkProduct = async (sales) => {
try {
 const result = sales.reduce((acc, { productId }) => {
 const product = productsModels.getById(productId);
 return [...acc, product];
}, []);

const products = await Promise.all(result);
const isIdInvalid = products.some((product) => product.length === 0);
return isIdInvalid;
} catch (error) {
console.log(error);
}
};
const creat = async (sales) => {
  const invalid = await checkProduct(sales);
  if (invalid) return [];
  const vendas = await salesModel.creat(sales);
  return vendas;
 };

module.exports = {
  checkProduct,
  creat,
};