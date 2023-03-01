const { Product } = require('../../models');

const add = async (req, res) => {
  console.log('add');
  const addedContact = await Product.create({ ...req.body });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      addedContact,
    },
  });
};

module.exports = add;
