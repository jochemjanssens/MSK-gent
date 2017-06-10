const Joi = require(`joi`);

const schema = {

  text: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {schema};
