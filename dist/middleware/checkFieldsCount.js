"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function CheckFieldsCount(req, res, next) {
  var fieldsToUpdate = Object.keys(req.body);

  if (fieldsToUpdate.length > 1) {
    return res.status(422).json({
      status: 422,
      error: 'Excess fields submitted. Only name field can be updated'
    });
  }

  next();
}

var _default = CheckFieldsCount;
exports.default = _default;
//# sourceMappingURL=checkFieldsCount.js.map