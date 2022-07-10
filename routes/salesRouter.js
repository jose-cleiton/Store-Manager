const express = require('express');
const { errorHandler, salesFildesExixt, salesMinQuantity } = require('../middlewares');

const salesRouter = express.Router();
const {
  creatControllers,
  updateControllersById,
  deletControllersById,
} = require('../controllers/salesProductsControllers');

const {
  getAllControllers,
  getByIdControllers,

} = require('../controllers/salesProductsControllers');

salesRouter.use(errorHandler);
salesRouter.get('/', getAllControllers);
salesRouter.get('/:id', getByIdControllers);
salesRouter.post('/',
  salesFildesExixt,
  salesMinQuantity,
  creatControllers);
salesRouter.put('/:id',
  salesFildesExixt,
  salesMinQuantity,
  updateControllersById);
salesRouter.delete('/:id', deletControllersById);

module.exports = salesRouter;