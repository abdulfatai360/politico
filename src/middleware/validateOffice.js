import Joi from 'joi';

function validateOffice(req, res, next) {
  const schema = {
    type: Joi
      .string().required()
      .trim().min(5)
      .max(255),
    name: Joi
      .string().required()
      .trim().min(5)
      .max(255),
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

export default validateOffice;
