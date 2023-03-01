const { Schema, model } = require('mongoose');

const Comment = require('./comment');

const { handleMongooseError } = require('../helpers');

const productSchema = Schema(
  {
    imageUrl: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
      required: [true, 'Set name for product'],
    },
    count: {
      type: Number,
      required: [true, 'Set count for product'],
    },
    size: {
      width: Number,
      height: Number,
    },
    weight: {
      type: String,
      required: [true, 'Set weight for product'],
    },
    comments: [Comment.schema],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Handle validation errors
productSchema.post('save', handleMongooseError);

const Contact = model('product', productSchema);

module.exports = Contact;
