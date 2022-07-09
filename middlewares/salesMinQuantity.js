const { validateQuantity } = require('./salesSchema');

const salesMinQuantityValidation = (req, res, next) => {
  const sales = req.body;

  const { error } = validateQuantity.validate(sales);

  if (error) {
    console.log(error);
    return res
      .status(422).json({ message: error.message });
  }

  next();
};

module.exports = salesMinQuantityValidation;