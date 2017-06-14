const Joi = require(`joi`);

const schema = {

  nameValue: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  name: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  firstname: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  text: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  liveyears: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  handle: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  bio: {
    type: String,
    required: true,
    validation: Joi.string()
  },

};

module.exports = {schema};
