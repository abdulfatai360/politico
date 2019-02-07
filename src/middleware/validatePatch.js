import Joi from 'joi';

function validatePatch(req, res, next) {
  const bodySchema = {
    name: Joi
      .string()
      .min(6)
      .required(),
  };

  const { error } = Joi.validate(req.body, bodySchema);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }

  return next();
}

export default validatePatch;
