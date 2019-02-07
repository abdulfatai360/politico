
function validateNameParam(req, res, next) {
  const { name } = req.params;

  if (name !== 'name') {
    return res.status(422).json({
      status: 422,
      error: 'Invalid parameter. Only name field can be updated',
    });
  }

  return next();
}


export default validateNameParam;
