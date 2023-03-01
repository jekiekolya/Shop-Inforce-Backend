const express = require('express');
const router = express.Router();

const {
  validation,
  ctrlWrapper,
  isValidId,
  upload,
} = require('../../middlewares');
const { productSchema } = require('../../schemas');
const { products: ctrl } = require('../../controllers');

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:productId', isValidId, ctrlWrapper(ctrl.getById));

router.post(
  '/',
  validation(productSchema.addProductSchema),
  ctrlWrapper(ctrl.add)
);

router.delete('/:productId', isValidId, ctrlWrapper(ctrl.removeById));

// router.put(
//   '/:productId',
//   isValidId,
//   validation(productSchema.updateProductSchema),
//   ctrlWrapper(ctrl.updateById)
// );

router.patch(
  '/product_img',
  upload.single('product_img'),
  ctrlWrapper(ctrl.updateImg)
);

module.exports = router;
