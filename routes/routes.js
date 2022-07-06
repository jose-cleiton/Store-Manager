const express = require('express');
const { authMiddleware } = require('../middlewares');

const routes = express.Router();
const controllers = require('../controllers/productsControllers');

routes.use(authMiddleware);

routes.get('/', controllers.getController);
routes.get('/:id', controllers.getByIdController);
routes.post('/', controllers.addController);

module.exports = routes;