class Middleware {
  static validateName(req, res, next) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 400,
        error: 'Name field is required',
      });
    }

    return next();
  }

  static validateAddress(req, res, next) {
    const { hqAddress } = req.body;

    if (!hqAddress) {
      return res.status(422).json({
        status: 422,
        error: 'Address field is required',
      });
    }

    return next();
  }

  static validateUrl(req, res, next) {
    const { logoUrl } = req.body;

    if (!logoUrl) {
      return res.status(422).json({
        status: 422,
        error: 'Image field is required',
      });
    }

    return next();
  }

  static validateIdParam(req, res, next) {
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

  static validateNameParam(req, res, next) {
    const { name } = req.params;

    if (name !== 'name') {
      return res.status(422).json({
        status: 422,
        error: 'Invalid parameter. Only name field can be updated',
      });
    }

    return next();
  }

  static validateOfficeType(req, res, next) {
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({
        status: 400,
        error: 'Type field is required',
      });
    }

    return next();
  }
}

export default Middleware;
