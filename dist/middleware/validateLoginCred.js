"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dbconfig = _interopRequireDefault(require("../models/dbconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function validateLoginCred(_x, _x2, _x3) {
  return _validateLoginCred.apply(this, arguments);
}

function _validateLoginCred() {
  _validateLoginCred = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, password, findUserQuery, _ref, rows, rowCount, validPassword;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            findUserQuery = "SELECT * FROM users WHERE email='".concat(email, "'");
            _context.prev = 2;
            _context.next = 5;
            return _dbconfig.default.query(findUserQuery);

          case 5:
            _ref = _context.sent;
            rows = _ref.rows;
            rowCount = _ref.rowCount;
            _context.next = 10;
            return _bcryptjs.default.compare(password, rows[0].password);

          case 10:
            validPassword = _context.sent;

            if (!(rowCount === 0 && !validPassword)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: 400,
              error: 'Invalid email or password'
            }));

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(500).json({
              status: 500,
              error: _context.t0
            }));

          case 18:
            return _context.abrupt("return", next());

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 15]]);
  }));
  return _validateLoginCred.apply(this, arguments);
}

var _default = validateLoginCred;
exports.default = _default;
//# sourceMappingURL=validateLoginCred.js.map