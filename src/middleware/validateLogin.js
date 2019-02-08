import Joi from 'joi';

function validateLogin(req, res, next) {
  const schema = {
    email: Joi
      .string().required().email({ minDomainAtoms: 2 }),
    password: Joi
      .string().min(6).required(),
  };

  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }

  return next();
}

export default validateLogin;
