const express = require('express');
const { errorHandler } = require('../middlewares');

const routes = express.Router();
const controllers = require('../controllers/productsControllers');

routes.use(errorHandler);

routes.get('/', controllers.getController);
routes.get('/:id', controllers.getByIdController);
routes.post('/', controllers.addController);

module.exports = routes;