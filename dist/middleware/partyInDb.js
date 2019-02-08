"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function partyInDb(_x, _x2, _x3) {
  return _partyInDb.apply(this, arguments);
}

function _partyInDb() {
  _partyInDb = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (data.length) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              status: 404,
              message: 'Requested party not found in database'
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _partyInDb.apply(this, arguments);
}

var _default = partyInDb;
exports.default = _default;
//# sourceMappingURL=partyInDb.js.map