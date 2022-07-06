const model = require('../models/productsModels');

const addServices = async (name) => {
  if (!name) return [];
  const product = await model.createModels(name);
  return product;
};

const getServices = async () => {
  const products = await model.getModels();
  if (!products) return [];
  return products;
};

const getByIdServices = async (id) => {
  const product = await model.getByIdModels(id);
  if (!product) return [];
  return product;
};

const updateServices = async (id, name) => {
  const affectedRows = await model.updateModels(id, name);
  
  return affectedRows;
};
const deleteServices = async (id) => {
  const affectedRows = await model.deleteModels(id);
  
  return affectedRows;
};

const getByIdServicesById = async (i) => { 
  const product = await model.getModelsById(i);
  
  return product;
};
 
module.exports = {
  getServices,
  getByIdServices,
  addServices,
  updateServices,
  deleteServices,
  getByIdServicesById,
};