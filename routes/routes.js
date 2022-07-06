const express = require('express');

const routes = express.Router();
const controllers = require('../controllers/productsControllers');

routes.get('/', controllers.getController);
routes.get('/:id', controllers.getByIdController);
routes.post('/', controllers.addController);

module.exports = routes;