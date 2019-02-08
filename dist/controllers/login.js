"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbconfig = require("../models/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var email, findUserQuery, _ref, rows, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;
            findUserQuery = "SELECT * FROM users WHERE email='".concat(email, "'");
            _context.prev = 2;
            _context.next = 5;
            return _dbconfig.db.query(findUserQuery);

          case 5:
            _ref = _context.sent;
            rows = _ref.rows;
            token = _jsonwebtoken.default.sign(rows[0], process.env.JWT_SECRET_KEY, {
              expiresIn: '24h'
            });
            return _context.abrupt("return", res.status(200).json({
              status: 200,
              data: [{
                token: token,
                user: rows[0]
              }]
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(422).json({
              status: 422,
              error: _context.t0.detail
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 11]]);
  }));
  return _login.apply(this, arguments);
}

var _default = login;
exports.default = _default;
//# sourceMappingURL=login.js.map