function CheckFieldCount(req, res, next) {
  const fieldToUpdate = Object.keys(req.body);

  if (fieldToUpdate.length > 1) {
    return res.status(422).json({
      status: 422,
      error: 'Excess fields submitted. Only name field can be updated',
    });
  }

  next();
}

export default CheckFieldCount;
