const model = require('../models/productsModels');
const { logError } = require('../helprs');

const addServices = async (name) => {
  try {
    if (!name) return [];
    const product = await model.createModels(name);
    return product;
  } catch (error) {
    logError(error);
  }
};
const getServices = async () => {
  try {
    const products = await model.getModels();
    if (!products) return [];
    return products;
  } catch (error) {
    logError(error);
  }
};

const getByIdServices = async (id) => {
  try {
    const product = await model.getByIdModels(id);
    if (!product) return [];
    return product;
  } catch (error) {
    logError(error);
  }
};

const updateServices = async (id, name) => {
  try {
    const affectedRows = await model.updateModels(id, name);  
    return affectedRows;
  } catch (error) {
    logError(error);
  }
};
const deleteServices = async (id) => {
try {
  const affectedRows = await model.deleteModels(id);
  
  return affectedRows;
} catch (error) {
  logError(error);
}
};

const getByIdServicesById = async (i) => {
try {
  const product = await model.getModelsById(i);  
  return product;
} catch (error) {
  logError(error);
}
};
 
module.exports = {
  getServices,
  getByIdServices,
  addServices,
  updateServices,
  deleteServices,
  getByIdServicesById,
};