import Joi from 'joi';

function validateSignup(req, res, next) {
  const schema = {
    firstname: Joi
      .string().required(),
    lastname: Joi
      .string().required(),
    othername: Joi
      .string(),
    email: Joi
      .string().required().email({ minDomainAtoms: 2 }),
    password: Joi
      .string().min(6).required(),
    phoneNumber: Joi
      .string().required(),
    passportUrl: Joi
      .string().required().uri(),
    isAdmin: Joi
      .boolean().default(false),
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

export default validateSignup;
