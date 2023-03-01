const { Product } = require('../../models');

const addComment = async (req, res) => {
  const { productId } = req.params;
  // Create Comment
  const addedComment = {
    ...req.body,
    productId,
  };

  // Add Comment to the product
  const product = await Product.findById(productId);
  product.comments.push(addedComment);
  await product.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      addedComment,
    },
  });
};

module.exports = addComment;
