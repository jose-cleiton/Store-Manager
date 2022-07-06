const express = require('express');

const routes = express.Router();
const controllers = require('../controllers/productsControllers');

routes.get('/', controllers.getController);

module.exports = routes;