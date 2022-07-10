const salesProductsServices = require('../services/salesProductsServices');

const INTERNAL = 'Internal server error';
const SALES_NOT_FOUND = 'Sale not found';
const PRODUCTS_NOT_FOUND = 'Product not found';
const creatControllers = async (req, res, next) => { 
  try {
    const sales = req.body;    
    const result = await salesProductsServices.creatProductService(sales);
    if (!result) return res.status(404).json({ message: PRODUCTS_NOT_FOUND });
    res.status(201).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

const getAllControllers = async (req, res, next) => {
  try {
    const result = await salesProductsServices.getAllSalesProductsService();
    return res.status(200).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};
const getByIdControllers = async (req, res, next) => { 
  try {
    const { id } = req.params;    
    const result = await salesProductsServices.getProductsSalesServiceById(id);

    if (!result) return res.status(404).json({ message: SALES_NOT_FOUND });
console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

const deletControllersById = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const result = await salesProductsServices.deletSalesProductsServiceById(id);
    console.log('result', result);
    if (!result) return res.status(404).json({ message: SALES_NOT_FOUND });
    return res.status(204).send();
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

const updateControllersById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = req.body;
    const result = await salesProductsServices.updateSalesProductsServiceById(id, sales);
    if (!result) return res.status(404).json({ message: SALES_NOT_FOUND });
    return res.status(200).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

module.exports = {
  creatControllers,
  getAllControllers,
  getByIdControllers,
  deletControllersById,
  updateControllersById,
};