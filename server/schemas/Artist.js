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

  text: {
    type: String,
    required: true,
    validation: Joi.string()
  },

};

module.exports = {schema};
