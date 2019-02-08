"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function CheckFieldCount(req, res, next) {
  var fieldToUpdate = Object.keys(req.body);

  if (fieldToUpdate.length > 1) {
    return res.status(422).json({
      status: 422,
      error: 'Excess fields submitted. Only name field can be updated'
    });
  }

  next();
}

var _default = CheckFieldCount;
exports.default = _default;
//# sourceMappingURL=checkFieldCount.js.map