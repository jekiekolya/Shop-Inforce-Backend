const { NotFound } = require('http-errors');
const { Product } = require('../../models');

const removeById = async (req, res) => {
  const { productId } = req.params;

  const deletedId = await Product.findByIdAndRemove(productId);
  if (!deletedId) {
    throw new NotFound(`Product with id=${productId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Product deleted',
  });
};

module.exports = removeById;
