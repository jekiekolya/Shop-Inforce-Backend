const { NotFound } = require('http-errors');
const { Product } = require('../../models');

const getById = async (req, res, next) => {
  const productId = req.params.productId;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new NotFound(`Contact with id=${productId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: { product },
  });
};

module.exports = getById;
