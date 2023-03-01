const { Product } = require('../../models');

const add = async (req, res) => {
  const addedProduct = await Product.create({ ...req.body });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      addedProduct,
    },
  });
};

module.exports = add;
