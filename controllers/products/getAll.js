const { Product } = require('../../models');

const getAll = async (req, res) => {
  // Find products
  const products = await Product.find();

  res.json({
    status: 'success',
    code: 200,
    data: { products },
  });
};

module.exports = getAll;
