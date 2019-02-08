"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbconfig = _interopRequireDefault(require("../models/dbconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function checkIfDeleted(_x, _x2, _x3) {
  return _checkIfDeleted.apply(this, arguments);
}

function _checkIfDeleted() {
  _checkIfDeleted = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var id, queryStr, rows;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = Number(req.params.id);
            queryStr = "SELECT name FROM party WHERE id = '".concat(id, "'");
            _context.next = 4;
            return (0, _dbconfig.default)(queryStr);

          case 4:
            rows = _context.sent;

            if (rows.length) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: 400,
              message: 'This entity had already been deleted'
            }));

          case 7:
            return _context.abrupt("return", next());

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _checkIfDeleted.apply(this, arguments);
}

var _default = checkIfDeleted;
exports.default = _default;
//# sourceMappingURL=beenDeleted.js.map