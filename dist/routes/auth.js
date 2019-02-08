"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbconfig = _interopRequireDefault(require("../models/dbconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

_dotenv.default.config();

router.post('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var password, salt, hash, queryText, values, _ref2, rows, token;

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
            queryText = "INSERT INTO users(\n    first_name, \n    last_name, \n    other_name, \n    email, \n    password, \n    phone_number, \n    passport_url, \n    is_admin) \n    VALUES($1, $2, $3, $4, $5, $6, $7, $8) \n    RETURNING *";
            values = [req.body.firstname, req.body.lastname, req.body.othername, req.body.email, hash, req.body.phoneNumber, req.body.passportUrl, req.body.isAdmin];
            _context.prev = 9;
            _context.next = 12;
            return _dbconfig.default.query(queryText, values);

          case 12:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            token = _jsonwebtoken.default.sign(rows[0], process.env.JWT_PRIVATE_KEY);
            return _context.abrupt("return", res.status(201).json({
              status: 201,
              data: [{
                token: token,
                user: rows[0]
              }]
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](9);
            return _context.abrupt("return", res.status(422).json({
              status: 422,
              error: _context.t0.detail
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[9, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.js.map