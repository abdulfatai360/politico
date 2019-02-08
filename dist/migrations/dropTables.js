"use strict";

require("@babel/polyfill");

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_config.default.on('connect', function () {
  console.log('Connected to Database');
});

function dropPartyTable() {
  return _dropPartyTable.apply(this, arguments);
}

function _dropPartyTable() {
  _dropPartyTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS party';
            (0, _index.default)(queryText);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _dropPartyTable.apply(this, arguments);
}

function dropOfficeTable() {
  return _dropOfficeTable.apply(this, arguments);
}

function _dropOfficeTable() {
  _dropOfficeTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS office';
            (0, _index.default)(queryText);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _dropOfficeTable.apply(this, arguments);
}

function dropUserTable() {
  return _dropUserTable.apply(this, arguments);
}

function _dropUserTable() {
  _dropUserTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS users';
            (0, _index.default)(queryText);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _dropUserTable.apply(this, arguments);
}

_config.default.on('remove', function () {
  console.log('Database client disconnected');
  process.exit(0);
});
//# sourceMappingURL=dropTables.js.map