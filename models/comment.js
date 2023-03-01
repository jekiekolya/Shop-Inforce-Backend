const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const commentSchema = Schema(
  {
    productId: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      minlength: 2,
      maxlength: 200,
      required: [true, 'Set description for comment'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Handle validation errors
commentSchema.post('save', handleMongooseError);

const Comment = model('comment', commentSchema);

module.exports = Comment;
