const db = require('./db');
const salesModels = require('./salesModels');
const logError = require('../helprs');

const creatProductModel = async (sales) => {
  const CPM = 'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES ?;';
  try {
    const saleId = await salesModels.creatSelesModel();

    const values = sales.map(({ productId, quantity }) => ([saleId, productId, quantity]));

    await db.query(CPM, [values]);

    const result = {
      id: saleId,
      itemsSold: sales,
    };

    return result;
  } catch (error) {
    console.log(error);
  }
};
const getAllSalesProductsModel = async () => {
  const GAPM = `
    SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales s
    INNER JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id
    ORDER BY s.id, sp.product_id;
  `;
  try {
    const [products] = await db.execute(GAPM);
    return products;
  } catch (error) {
    logError(error);
  }
};

const getProductsSalesModelById = async (id) => { 
  const GPSMBI = `
    SELECT s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales s
    INNER JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY s.id, sp.product_id;
  `;
  try {
    const [products] = await db.execute(GPSMBI, [id]);
    return products;
  } catch (error) {
    logError(error);
  }
};

const deletSalesProductsModelById = async (Id) => {
  const DSPMBI = `
    DELETE StoreManager.sales, StoreManager.sales_products
    FROM StoreManager.sales
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = 1;
  `;
  try {
    await db.execute(DSPMBI, [Id]);
  } catch (error) {
    logError(error);
  }
};

const updatSalesProductsModelById = async (saleId, productId, quantity) => {
  const UPSMBI = `
    UPDATE StoreManager.sales_products
    SET quantity = ?
    WHERE sale_id = ?
    AND product_id = ?;
  `;
  try {
    await db.execute(UPSMBI, [quantity, saleId, productId]);
  } catch (error) {
    logError(error);
  }
};

module.exports = {
  creatProductModel,
  getAllSalesProductsModel,
  getProductsSalesModelById,
  deletSalesProductsModelById,
  updatSalesProductsModelById,

};
