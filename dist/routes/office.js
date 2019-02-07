"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _dbconfig = require("../models/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

router.post('/:id/register',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, office, party, id, queryStr, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, office = _req$body.office, party = _req$body.party;
            id = req.params.id;
            console.log('helo');
            queryStr = "INSERT INTO candidates(office, party, candidate)\n    VALUES('".concat(office, "', '").concat(party, "', '").concat(id, "') \n    RETURNING office, candidate");
            _context.prev = 4;
            _context.next = 7;
            return _dbconfig.db.query(queryStr);

          case 7:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            return _context.abrupt("return", res.status(201).json({
              status: 201,
              data: rows[0]
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", res.status(500).json({
              status: 500,
              error: _context.t0
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;
//# sourceMappingURL=office.js.map