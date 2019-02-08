"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateParty(req, res, next) {
  var schema = {
    name: _joi.default.string().required().trim().min(5).max(255),
    acronym: _joi.default.string().trim().min(1).max(10),
    hqAddress: _joi.default.string().required().trim().min(5).max(255),
    logoUrl: _joi.default.string().required().trim().uri()
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

var _default = validateParty;
exports.default = _default;
//# sourceMappingURL=validateParty.js.map