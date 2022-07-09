const { validateProducts } = require('./salesSchema');

module.exports = (req, res, next) => {
  const sales = req.body;

  const { error } = validateProducts.validate(sales);

  if (error) return res.status(400).json({ message: error.message });

  next();
};
