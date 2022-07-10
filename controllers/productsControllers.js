const services = require('../services/productsServices');
const models = require('../models/productsModels');

const addController = async (req, res) => {
  const { name } = req.body;
  const product = await services.addServices(name); 
  console.log(product);
  return res.status(201).json(product);
};

const getController = async (req, res, next) => {
  const products = await services.getServices();
  if (!products) return next({ status: 404, message: 'Product not found' });
  return res.status(200).json(products);
};

const getByIdController = async (req, res, next) => { 
  const { id } = req.params;
  const { a } = req.query;
  const [product] = await services.getByIdServices(id);
  const [searchedProduct] = await services.getByIdServicesById(a);
  const [products] = await models.getModels();

 switch (true) {
    case id === 'search':
      if (!searchedProduct) {
        return res.status(200).json(products);
      }
      return res.status(200).json(searchedProduct);
    case !product || product.length === 0:
     return next({ status: 404, message: 'Product not found' });
    default:
      return res.status(200).json(product);
  }
};

const updateController = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const affectedRows = await services.updateServices(id, name);
  if (!affectedRows) next({ status: 404, message: 'Product not found' });
  return res.status(200).json({ id, name });
};

const deleteController = async (req, res) => { 
  const { id } = req.params;
  await services.deleteServices(id);
  
  return res.status(204).end();
};

module.exports = {
  getController,
  addController,
  getByIdController,  
  updateController,
  deleteController,
};