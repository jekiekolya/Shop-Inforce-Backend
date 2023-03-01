const { NotFound } = require('http-errors');
const { Product } = require('../../models');

const updateById = async (req, res, next) => {
  const { productId } = req.params;

  const updatedContact = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedContact) {
    throw new NotFound(`Product with id=${productId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      updatedContact,
    },
  });
};

module.exports = updateById;
