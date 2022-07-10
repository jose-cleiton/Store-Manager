const authMiddleware = require('./authMiddleware');
const errorHandler = require('./errorHandler');

const salesFildesExixt = require('./salesFildesExixt');
const salesNomeExixt = require('./salesNomeExixt');
const salesMinQuantity = require('./salesMinQuantity');

module.exports = {
  authMiddleware,
  errorHandler,
 
  salesFildesExixt,
  salesNomeExixt,
  salesMinQuantity,

};