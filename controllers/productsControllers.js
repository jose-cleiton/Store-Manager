const services = require('../services/productsServices');
const models = require('../models/productsModels');

const addController = async (req, res, next) => {
  const { name } = req.body;
  const product = await services.addServices(name);
  if (!product) return next({ status: 400, message: 'Não foi possível adicionar o produto' });
  return res.status(201).json(product);
};

const getController = async (req, res, next) => {
  const products = await services.getServices();
  if (!products) return next({ status: 404, message: 'Não há produtos cadastrados' });
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
     return next({ status: 404, message: 'Não há produtos cadastrados' });
    default:
      return res.status(200).json(product);
  }
};

const updateController = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const affectedRows = await services.updateServices(id, name);
  if (!affectedRows) next({ status: 400, message: 'Não foi possível atualizar o produto' });
  return res.status(200).json({ id, name });
};

const deleteController = async (req, res, next) => { 
  const { id } = req.params;
  const affectedRows = await services.deleteServices(id);
  if (!affectedRows) next({ status: 400, message: 'Não foi possível deletar o produto' });
  return res.status(204).end();
};

module.exports = {
  getController,
  addController,
  getByIdController,  
  updateController,
  deleteController,
};