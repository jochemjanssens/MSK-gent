const Joi = require(`joi`);

const schema = {

  title: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  text: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  imageUrl: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {schema};
