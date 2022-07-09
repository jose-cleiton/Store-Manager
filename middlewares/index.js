const authMiddleware = require('./authMiddleware');
const errorHandler = require('./errorHandler');
const validProduct = require('./validProduct');
const salesFildesExixt = require('./salesFildesExixt');
const salesNomeExixt = require('./salesNomeExixt');
const salesMinQuantity = require('./salesMinQuantity');

module.exports = {
  authMiddleware,
  errorHandler,
  validProduct, 
  salesFildesExixt,
  salesNomeExixt,
  salesMinQuantity,

};