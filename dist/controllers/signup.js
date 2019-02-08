"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbconfig = require("../models/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

function signup(_x, _x2) {
  return _signup.apply(this, arguments);
}

function _signup() {
  _signup = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var password, salt, hash, queryText, values, _ref, rows, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            password = req.body.password;
            _context.next = 3;
            return _bcryptjs.default.genSalt(10);

          case 3:
            salt = _context.sent;
            _context.next = 6;
            return _bcryptjs.default.hash(password, salt);

          case 6:
            hash = _context.sent;
            console.log(hash);
            queryText = "INSERT INTO users(\n    first_name, last_name, other_name, email, \n    password, phone_number, passport_url, is_admin) \n    VALUES($1, $2, $3, $4, $5, $6, $7, $8) \n    RETURNING *";
            values = [req.body.firstname, req.body.lastname, req.body.othername, req.body.email, hash, req.body.phoneNumber, req.body.passportUrl, req.body.isAdmin];
            _context.prev = 10;
            _context.next = 13;
            return _dbconfig.db.query(queryText, values);

          case 13:
            _ref = _context.sent;
            rows = _ref.rows;
            token = _jsonwebtoken.default.sign(rows[0], process.env.JWT_SECRET_KEY);
            console.log('token', token);
            return _context.abrupt("return", res.header('x-auth-token', token).status(201).json({
              status: 201,
              data: [{
                token: token,
                user: rows[0]
              }]
            }));

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](10);
            console.log('hey');
            return _context.abrupt("return", res.status(500).json({
              status: 500,
              error: _context.t0
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 20]]);
  }));
  return _signup.apply(this, arguments);
}

var _default = signup;
exports.default = _default;
//# sourceMappingURL=signup.js.map