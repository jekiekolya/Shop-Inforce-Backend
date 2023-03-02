const fs = require('fs/promises');
const jimp = require('jimp');
const uniqid = require('uniqid');
const { BadRequest } = require('http-errors');

const { uploadFileToCloudinary } = require('../../helpers');

const updateProductImg = async (req, res) => {
  if (!req.file) {
    throw new BadRequest('Img not attach');
  }

  const { path: tempUpload } = req.file;

  try {
    // change file size (with the help of jimp)
    const img = await jimp.read(req.file.path);
    await img
      .autocrop()
      .cover(
        250,
        250,
        jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(req.file.path);

    // Upload file to cloud service
    const { secure_url: productImgURL, public_id: idCloudProductImg } =
      await uploadFileToCloudinary(tempUpload, uniqid());
    await fs.unlink(tempUpload);

    res.json({
      status: 'success',
      code: 200,
      data: {
        productImgURL,
        idCloudProductImg,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateProductImg;
