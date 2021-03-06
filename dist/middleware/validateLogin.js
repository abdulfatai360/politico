"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLogin(req, res, next) {
  var schema = {
    email: _joi.default.string().required().email({
      minDomainAtoms: 2
    }),
    password: _joi.default.string().min(6).required()
  };

  var _Joi$validate = _joi.default.validate(req.body, schema),
      error = _Joi$validate.error;

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message
    });
  }

  return next();
}

var _default = validateLogin;
exports.default = _default;
//# sourceMappingURL=validateLogin.js.map