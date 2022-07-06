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
 
const createModels = async (name) => {
  const [{ insertId }] = await db.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  const product = {
    id: insertId,
    name,
  };
  return product;
};

const updateModels = async (id, name) => {
  const [affectedRows] = await db.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return affectedRows;
};

const deleteModels = async (id) => { 
  const affectedRows = await db.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return affectedRows;
};

const getModelsById = async (i) => { 
  const product = await db
    .query(`SELECT * FROM StoreManager.products WHERE name LIKE "%${i}%"`);
  return product;
};

module.exports = {
  getModels,
  getByIdModels,
  createModels,
  updateModels,
  deleteModels,
  getModelsById,
  
};