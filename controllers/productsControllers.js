const services = require('../services/productsServices');
const models = require('../models/productsModels');

const addController = async (req, res) => {
  const { name } = req.body;
  const product = await services.addServices(name);
  if (!product) return res.status(400).json({ error: 'Não foi possível cadastrar o produto' });
  return res.status(200).json(product);
};

const getController = async (req, res) => {
  const products = await services.getServices();
  if (!products) return res.status(404).json({ error: 'Não há produtos cadastrados' });
  return res.status(200).json(products);
};

const getByIdController = async (req, res) => { 
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
      return res.status(404).json({
        message: 'Product not found',
      });
    default:
      return res.status(200).json(product);
  }
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const affectedRows = await services.updateServices(id, name);
  if (!affectedRows) return res.status(400).json({ error: 'Não foi possível atualizar o produto' });
  return res.status(200).json({ id, name });
};

const deleteController = async (req, res) => { 
  const { id } = req.params;
  const affectedRows = await services.deleteServices(id);
  if (!affectedRows) return res.status(400).json({ error: 'Não foi possível deletar o produto' });
  return res.status(204).end();
};

module.exports = {
  getController,
  addController,
  getByIdController,  
  updateController,
  deleteController,
};