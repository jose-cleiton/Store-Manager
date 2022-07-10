const express = require('express');
const { errorHandler } = require('../middlewares');
 const { validar, validarId } = require('../middlewares/validProduct');

const routes = express.Router();

const controllers = require('../controllers/productsControllers');

routes.use(errorHandler);

routes.get('/', controllers.getController);
routes.get('/:id', controllers.getByIdController);
routes.post('/', validar, controllers.addController);
routes.put('/:id', validar, validarId, controllers.updateController);

module.exports = routes;