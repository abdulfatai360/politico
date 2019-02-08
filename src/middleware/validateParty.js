import Joi from 'joi';

function validateParty(req, res, next) {
  const schema = {
    name: Joi
      .string().required().trim().min(5)
      .max(255),
    acronym: Joi
      .string().trim().min(1)
      .max(10),
    hqAddress: Joi
      .string().required().trim().min(5)
      .max(255),
    logoUrl: Joi
      .string().required().trim().uri(),
  };

  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message,
    });
  }

  return next();
}

export default validateParty;
