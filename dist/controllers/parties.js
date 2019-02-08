"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbconfig = require("../models/dbconfig");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Party =
/*#__PURE__*/
function () {
  function Party() {
    _classCallCheck(this, Party);
  }

  _createClass(Party, null, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, name, hqAddress, logoUrl, queryStr, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, hqAddress = _req$body.hqAddress, logoUrl = _req$body.logoUrl;
                queryStr = "INSERT INTO party(name, hq_address, logo_url)\n      VALUES('".concat(name, "', '").concat(hqAddress, "', '").concat(logoUrl, "') \n      RETURNING id, name");
                _context.prev = 2;
                _context.next = 5;
                return _dbconfig.db.query(queryStr);

              case 5:
                _ref = _context.sent;
                rows = _ref.rows;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  data: rows
                }));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", res.status(422).json({
                  status: 422,
                  error: 'Party already exists in database'
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var id, result, queryStr, _ref2, rows, rowCount;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = Number(req.params.id);
                queryStr = "SELECT id, name, logo_url \n      FROM party \n      WHERE id = '".concat(id, "'");
                _context2.prev = 2;
                _context2.next = 5;
                return _dbconfig.db.query(queryStr);

              case 5:
                _ref2 = _context2.sent;
                rows = _ref2.rows;
                rowCount = _ref2.rowCount;

                if (!(rowCount === 0)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  status: 404,
                  error: 'Requested party not found in database'
                }));

              case 10:
                result = rows;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context2.t0.detail
                }));

              case 16:
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  data: result
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 13]]);
      }));

      function get(_x3, _x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var queryStr, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryStr = "SELECT id, name, logo_url \n      FROM party\n      ORDER BY id ASC";
                _context3.prev = 1;
                _context3.next = 4;
                return _dbconfig.db.query(queryStr);

              case 4:
                _ref3 = _context3.sent;
                rows = _ref3.rows;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: rows
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context3.t0.detail
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9]]);
      }));

      function getAll(_x5, _x6) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "updateName",
    value: function () {
      var _updateName = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var id, newName, queryStr, _ref4, rows;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = Number(req.params.id);
                newName = req.body.name;
                queryStr = "UPDATE party \n      SET name = '".concat(newName, "' \n      WHERE id = '").concat(id, "' \n      RETURNING id, name");
                _context4.prev = 3;
                _context4.next = 6;
                return _dbconfig.db.query(queryStr);

              case 6:
                _ref4 = _context4.sent;
                rows = _ref4.rows;
                console.log('Hello');
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  data: rows
                }));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](3);
                return _context4.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context4.t0
                }));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 12]]);
      }));

      function updateName(_x7, _x8) {
        return _updateName.apply(this, arguments);
      }

      return updateName;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var id, queryStr;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = Number(req.params.id);
                queryStr = "DELETE FROM party WHERE id = '".concat(id, "'");
                _context5.prev = 2;
                _context5.next = 5;
                return _dbconfig.db.query(queryStr);

              case 5:
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'Party deleted successfully.'
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](2);
                return _context5.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context5.t0.detail
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 8]]);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return Party;
}();

var _default = Party;
exports.default = _default;
//# sourceMappingURL=parties.js.map