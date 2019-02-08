"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPartyTable = createPartyTable;
exports.createOfficeTable = createOfficeTable;
exports.dropPartyTable = dropPartyTable;
exports.dropOfficeTable = dropOfficeTable;

require("@babel/polyfill");

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL
});

function queryDatabase(_x) {
  return _queryDatabase.apply(this, arguments);
}

function _queryDatabase() {
  _queryDatabase = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(queryText) {
    var dbResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pool.query(queryText);

          case 3:
            dbResponse = _context.sent;
            console.log(dbResponse);
            pool.end();
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            pool.end();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));
  return _queryDatabase.apply(this, arguments);
}

pool.on('connect', function () {
  console.log('Connected to Database');
});

function createPartyTable() {
  return _createPartyTable.apply(this, arguments);
}

function _createPartyTable() {
  _createPartyTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            queryText = "CREATE TABLE IF NOT EXISTS party (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(255) NOT NULL UNIQUE,\n    hq_address VARCHAR NOT NULL,\n    logo_url VARCHAR NOT NULL\n  )";
            queryDatabase(queryText);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _createPartyTable.apply(this, arguments);
}

function createOfficeTable() {
  return _createOfficeTable.apply(this, arguments);
}

function _createOfficeTable() {
  _createOfficeTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            queryText = "CREATE TABLE IF NOT EXISTS office (\n    id SERIAL PRIMARY KEY,\n    type VARCHAR(128) NOT NULL,\n    name VARCHAR(255) NOT NULL UNIQUE\n  )";
            queryDatabase(queryText);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _createOfficeTable.apply(this, arguments);
}

function dropPartyTable() {
  return _dropPartyTable.apply(this, arguments);
}

function _dropPartyTable() {
  _dropPartyTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS party';
            queryDatabase(queryText);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _dropPartyTable.apply(this, arguments);
}

function dropOfficeTable() {
  return _dropOfficeTable.apply(this, arguments);
}

function _dropOfficeTable() {
  _dropOfficeTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS office';
            queryDatabase(queryText);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _dropOfficeTable.apply(this, arguments);
}

pool.on('remove', function () {
  console.log('Database client disconnected');
  process.exit(0);
});

require('make-runnable');
//# sourceMappingURL=migration.js.map