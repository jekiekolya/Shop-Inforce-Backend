const { isValidObjectId } = require('mongoose');

const isValidId = (req, _, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    const error = new Error(`${productId} is not correct`);
    error.status = 400;
    next(error);
  }
  next();
};

module.exports = isValidId;
