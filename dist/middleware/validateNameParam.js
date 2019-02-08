"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function validateNameParam(req, res, next) {
  var name = req.params.name;

  if (name !== 'name') {
    return res.status(422).json({
      status: 422,
      error: 'Invalid parameter. Only name field can be updated'
    });
  }

  return next();
}

var _default = validateNameParam;
exports.default = _default;
//# sourceMappingURL=validateNameParam.js.map