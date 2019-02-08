"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateSignup(req, res, next) {
  var schema = {
    firstname: _joi.default.string().required(),
    lastname: _joi.default.string().required(),
    othername: _joi.default.string(),
    email: _joi.default.string().required().email({
      minDomainAtoms: 2
    }),
    password: _joi.default.string().min(6).required(),
    phoneNumber: _joi.default.string().required(),
    passportUrl: _joi.default.string().required().uri(),
    isAdmin: _joi.default.boolean().default(false)
  };

  var _Joi$validate = _joi.default.validate(req.body, schema),
      error = _Joi$validate.error;

  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }

  return next();
}

var _default = validateSignup;
exports.default = _default;
//# sourceMappingURL=validateSignup.js.map