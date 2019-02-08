"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateId(req, res, next) {
  var id = req.params.id;
  id = Number(id);

  if (Number.isNaN(id)) {
    return res.status(422).json({
      status: 422,
      error: 'ID parameter is invalid. Must be a number'
    });
  }

  return next();
}

var _default = validateId;
exports.default = _default;
//# sourceMappingURL=validateId.js.map