const { getByIdModels } = require('../models/productsModels');

const validar = (req, res, next) => {
  const { name } = req.body;
  if (!name) return next({ status: 400, message: '"name" is required' });
  
  if (name.length < 5) {
    return next({ status: 400, message: '"name" must be at least 5 characters' }); 
  } 
  next();
};

const validarId = async (req, res, next) => {
  const { id } = req.params;
  const [search] = await getByIdModels(id);
  if (search === undefined) return next({ status: 400, message: 'Product not found' });
 
  next();
};

module.exports = {
  validar,
  validarId,

};