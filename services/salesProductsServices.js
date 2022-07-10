const salesProductsModels = require('../models/salesProductsModels');
const salesModels = require('../models/salesModels');

const productsModels = require('../models/productsModels');

const checkProductService = async (sales) => {
  try {
    const result = sales.reduce((acc, { productId }) => {
      const product = productsModels.getByIdModels(productId);
      return [...acc, product];
    }, []);
    const products = await Promise.all(result);
    const isIdInvalid = products.some((product) => product.length === 0);
    return isIdInvalid;
  } catch (error) {
    console.log(error);
  }
};

const creatProductService = async (sales) => {
  try {
    const isIdInvalid = await checkProductService(sales);
    console.log(isIdInvalid);
 
  if (isIdInvalid) return false;
 const result = await salesProductsModels.creatProductModel(sales);
 console.log(result);
  return result;
  } catch (error) {
    console.log(error);
}
};

const getAllSalesProductsService = async () => {
  try {
    const sales = await salesProductsModels.getAllSalesProductsModel();
    const result = sales
      .map((
        { sale_id: saleId, date, product_id: productId, quantity },
      ) => (
        {
    saleId,
    date,
    productId,
    quantity,
        }
      ));
    return result;
  } catch (error) {
   console.log(error.message);
  }
};

const getProductsSalesServiceById = async (id) => { 
  try {
    const sales = await salesProductsModels.getProductsSalesModelById(id);
console.log(sales);
    if (sales.length === 0) return false;
    
    const result = sales.map(({ date, product_id: productId, quantity }) => ({
    date,
    productId,
    quantity,
    }));
    return result;
  } catch (error) {
   console.log(error);
  }
};

const deletSalesProductsServiceById = async (Id) => {
  try {
    const sales = await salesModels.getByIdSalesModel(Id);
  
    if (sales.length === 0) return false;
    await salesProductsModels.deletSalesProductsModelById(Id);   
    return true;
  } catch (error) { 
    console.log(error);
  }
};

const updateSalesProductsServiceById = async (saleId, sales) => {
  try {
    const sale = await salesModels.getByIdSalesModel(saleId);
    if (sale.length === 0) return { error: true, message: 'Sale not found' };
    const isIdInvalid = await checkProductService(sales);
    if (isIdInvalid) return { error: true, message: 'Product not found' }; 
    const update = sales.reduce((acc, { productId, quantity }) => {
      const updatedSale = salesProductsModels
        .updatSalesProductsModelById(saleId, productId, quantity);
      return [...acc, updatedSale];
    }, []);
    await Promise.all(update);
    const updatedItems = {
      saleId,
      itemsUpdated: sales };  
    return updatedItems;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  checkProductService,
  creatProductService,
  getAllSalesProductsService,
  getProductsSalesServiceById,
  deletSalesProductsServiceById,
  updateSalesProductsServiceById,
};