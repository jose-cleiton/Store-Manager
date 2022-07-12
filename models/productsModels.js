const db = require('./db');
const { logError } = require('../helprs');

const getModels = async () => {
  try {
    const [products] = await db
      .query('SELECT * FROM StoreManager.products');
    return products;
  } catch (error) {
    logError(error);
  }
};
  const getByIdModels = async (id) => {
  try {
    const [product] = await db
      .query('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
   
    return product;    
  } catch (error) {
    logError(error);
  }
};
 
const createModels = async (name) => {
try {
      const [{ insertId }] = await db.execute(
        'INSERT INTO StoreManager.products (name) VALUES (?)',
        [name],
      );
      const product = {
        id: insertId,
        name,
      };
      return product;
    } catch (error) {
      logError(error);
    }
 };
  const updateModels = async (id, name) => {
 try {
  const [affectedRows] = await db.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return affectedRows;
 } catch (error) {
    logError(error);
  }
};

  const deleteModels = async (id) => { 
try {
  const affectedRows = await db.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return affectedRows;
} catch (error) {
  logError(error);
}  
};

  const getModelsById = async (i) => { 
try {
  const product = await db
    .query(`SELECT * FROM StoreManager.products WHERE name LIKE "%${i}%"`);
  return product;  
} catch (error) {
 logError(error); 
}
};

module.exports = {
  getModels,
  getByIdModels,
  createModels,
  updateModels,
  deleteModels,
  getModelsById,
  
};