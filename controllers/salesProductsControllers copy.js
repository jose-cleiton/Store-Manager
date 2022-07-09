const salesProductsServices = require('../services/salesProductsServices');

const INTERNAL = 'Internal server error';

const creatControllers = async (req, res, next) => { 
  try {
    const sales = req.body;
    console.log(sales);
    const result = await salesProductsServices.creatProductService(sales);
    if (!result) return next({ status: 404, message: 'Product not found' });
    res.status(201).json(result);
  } catch (error) {
   next({ status: 500, message: INTERNAL });
  }
};

const getAllControllers = async (req, res, next) => {
  try {
    const result = await salesProductsServices.getAllSalesProductsService();
    if (!result) return next({ status: 404, message: 'Sale not found' });
    return res(200).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};
const getByIdControllers = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const result = await salesProductsServices.getProductsSalesServiceById(id);
    if (!result) return next({ status: 404, message: 'Sale not found' });
    return res(200).json(result);
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

const deletControllersById = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const result = await salesProductsServices.deletSalesProductsServiceById(id);
    if (!result) return next({ status: 404, message: 'Sale not found' });
    return res(204).send();
  } catch (error) {
    next({ status: 500, message: INTERNAL });
  }
};

const updateControllersById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = req.body;
    const result = await salesProductsServices.updateSalesProductsServiceById(id, sales);
    if (!result) return next({ status: 404, message: 'Sale not found' });
    return res(200).json(result);
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