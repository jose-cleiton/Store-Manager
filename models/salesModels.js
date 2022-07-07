const db = require('./db');
const logError = require('../helprs');

const creatSelesModel = async () => {
  const queryCRE = 'INSERT INTO StoreManager.sales (id) VALUES (NULL)';
  try {
    const [result] = await db.execute(queryCRE);  
    const { insertId } = result;
    return insertId;
  } catch (error) {
    logError(error);
  }
};

const getByIdSalesModel = async (id) => {
  const queryGET = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  try {
    const [product] = await db.execute(queryGET, [id]);
    return product;
  } catch (error) {
    logError(error);
  }
};

module.exports = {
  creatSelesModel,
 getByIdSalesModel,
};