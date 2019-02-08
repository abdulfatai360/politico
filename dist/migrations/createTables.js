"use strict";

require("@babel/polyfill");

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgresdb01@127.0.0.1:5433/politico'
});

function query(_x) {
  return _query.apply(this, arguments);
}

function _query() {
  _query = _asyncToGenerator(
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
            console.log(dbResponse); // pool.end();

            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            pool.end();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  return _query.apply(this, arguments);
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
            queryText = "CREATE TABLE IF NOT EXISTS party (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(255) UNIQUE NOT NULL,\n    hq_address VARCHAR NOT NULL,\n    logo_url VARCHAR NOT NULL\n  )";
            query(queryText);

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
            queryText = "CREATE TABLE IF NOT EXISTS office (\n    id SERIAL PRIMARY KEY,\n    type VARCHAR(128) NOT NULL,\n    name VARCHAR(255) UNIQUE NOT NULL\n  )";
            query(queryText);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _createOfficeTable.apply(this, arguments);
}

function createUsersTable() {
  return _createUsersTable.apply(this, arguments);
}

function _createUsersTable() {
  _createUsersTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            queryText = "CREATE TABLE IF NOT EXISTS users (\n    id SERIAL PRIMARY KEY,\n    first_name VARCHAR(255) NOT NULL,\n    last_name VARCHAR(255) NOT NULL,\n    other_name VARCHAR(255),\n    email VARCHAR(255) UNIQUE NOT NULL,\n    password VARCHAR NOT NULL,\n    phone_number VARCHAR(128) NOT NULL,\n    passport_url VARCHAR NOT NULL,\n    is_admin BOOLEAN\n  )";
            query(queryText);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _createUsersTable.apply(this, arguments);
}

pool.on('remove', function () {
  console.log('Database client disconnected');
  process.exit(0);
});
//# sourceMappingURL=createTables.js.map