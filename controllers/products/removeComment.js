const { NotFound } = require('http-errors');
const { Product } = require('../../models');

const removeComment = async (req, res) => {
  const { productId, commentId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new NotFound(`Product with id=${productId} not found`);
  }

  const newComments = product.comments.filter(
    item => item._id.toString() !== commentId
  );

  if (newComments.length === product.comments.length) {
    throw new NotFound(`Comment with id=${commentId} not found`);
  }

  product.comments = newComments;
  await product.save();

  res.json({
    status: 'success',
    code: 200,
    message: 'Comment deleted',
  });
};

module.exports = removeComment;
