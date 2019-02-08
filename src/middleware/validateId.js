import Joi from 'joi';

function validateId(req, res, next) {
  let { id } = req.params;
  id = Number(id);

  if (Number.isNaN(id)) {
    return res.status(422).json({
      status: 422,
      error: 'ID parameter is invalid. Must be a number',
    });
  }

  return next();
}

export default validateId;
