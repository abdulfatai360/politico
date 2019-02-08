"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateOffice(req, res, next) {
  var schema = {
    type: _joi.default.string().required().trim().min(5).max(255),
    name: _joi.default.string().required().trim().min(5).max(255)
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

var _default = validateOffice;
exports.default = _default;
//# sourceMappingURL=validateOffice.js.map