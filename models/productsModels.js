const db = require('./db');

const getModels = async () => { 
  const [products] = await db
    .query('SELECT * FROM StoreManager.products');
  return products;
};

const getByIdModels = async (id) => {
  const [product] = await db
    .query('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return product;
 };

module.exports = {
  getModels,
  getByIdModels,
  
};