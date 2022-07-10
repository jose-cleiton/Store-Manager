const express = require('express');
const { errorHandler, salesFildesExixt, salesMinQuantity } = require('../middlewares');

const salesRouter = express.Router();

const controllers = require('../controllers/salesProductsControllers');

salesRouter.use(errorHandler);
salesRouter.get('/', controllers.getAllControllers);
salesRouter.get('/:id', controllers.getByIdControllers);
salesRouter.post('/', salesFildesExixt, salesMinQuantity, controllers.creatControllers);

module.exports = salesRouter;