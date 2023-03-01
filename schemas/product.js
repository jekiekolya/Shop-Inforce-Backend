const Joi = require('joi');

// Add product schema
const addProductSchema = Joi.object({
  imageUrl: Joi.string().trim().messages({
    'string.base': `{{#label}} should be a type of string`,
  }),
  name: Joi.string().trim().min(6).max(70).required().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'string.min': `{{#label}} should have a minimum length of 6`,
    'string.max': `{{#label}} should have a maximum length of 70`,
    'any.required': `{{#label}} is a required field`,
  }),
  count: Joi.number().integer().min(0).required().messages({
    'number.base': `{{#label}} should be a type of number`,
    'number.integer': `{{#label}} should be an integer`,
    'number.min': `{{#label}} should have a minimum value of 0`,
    'any.required': `{{#label}} is a required field`,
  }),
  size: Joi.object({
    width: Joi.number().integer().min(0).required().messages({
      'number.base': `{{#label}} should be a type of number`,
      'number.integer': `{{#label}} should be an integer`,
      'number.min': `{{#label}} should have a minimum value of 0`,
      'any.required': `{{#label}} is a required field`,
    }),
    height: Joi.number().integer().min(0).required().messages({
      'number.base': `{{#label}} should be a type of number`,
      'number.integer': `{{#label}} should be an integer`,
      'number.min': `{{#label}} should have a minimum value of 0`,
      'any.required': `{{#label}} is a required field`,
    }),
  })
    .required()
    .messages({
      'any.required': `{{#label}} is a required field`,
    }),
  weight: Joi.string().trim().required().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'any.required': `{{#label}} is a required field`,
  }),
})
  .required()
  .messages({
    'any.required': `missing fields`,
  });

// Update product schema
const updateProductSchema = Joi.object({
  imageUrl: Joi.string().trim().messages({
    'string.base': `{{#label}} should be a type of string`,
  }),
  name: Joi.string().trim().min(6).max(70).messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'string.min': `{{#label}} should have a minimum length of 6`,
    'string.max': `{{#label}} should have a maximum length of 70`,
  }),
  count: Joi.number().integer().min(0).messages({
    'number.base': `{{#label}} should be a type of number`,
    'number.integer': `{{#label}} should be an integer`,
    'number.min': `{{#label}} should have a minimum value of 0`,
    'any.required': `{{#label}} is a required field`,
  }),
  size: Joi.object({
    width: Joi.number().integer().min(0).messages({
      'number.base': `{{#label}} should be a type of number`,
      'number.integer': `{{#label}} should be an integer`,
      'number.min': `{{#label}} should have a minimum value of 0`,
    }),
    height: Joi.number().integer().min(0).messages({
      'number.base': `{{#label}} should be a type of number`,
      'number.integer': `{{#label}} should be an integer`,
      'number.min': `{{#label}} should have a minimum value of 0`,
      'any.required': `{{#label}} is a required field`,
    }),
  }),
  weight: Joi.string().trim().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'any.required': `{{#label}} is a required field`,
  }),
})
  .required()
  .messages({
    'any.required': `missing fields`,
  });

// Comments
const addCommentSchema = Joi.object({
  description: Joi.string().trim().min(2).max(200).required().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'string.min': `{{#label}} should have a minimum length of 6`,
    'string.max': `{{#label}} should have a maximum length of 70`,
  }),
  date: Joi.string().trim().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
  }),
})
  .required()
  .messages({
    'any.required': `missing fields`,
  });

module.exports = {
  addProductSchema,
  updateProductSchema,
  addCommentSchema,
};
