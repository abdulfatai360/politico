"use strict";

require("@babel/polyfill");

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});
pool.on('connect', function () {
  console.log('Connected to Database');
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

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0); // pool.end();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  return _query.apply(this, arguments);
}

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

function createCandidatesTable() {
  return _createCandidatesTable.apply(this, arguments);
}

function _createCandidatesTable() {
  _createCandidatesTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            queryText = "CREATE TABLE IF NOT EXISTS candidates (\n    id SERIAL,\n    office INTEGER UNIQUE NOT NULL REFERENCES office(id),\n    party INTEGER NOT NULL REFERENCES party(id),\n    candidate INTEGER UNIQUE NOT NULL REFERENCES users(id),\n    PRIMARY KEY (office, candidate)\n  )";
            query(queryText);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _createCandidatesTable.apply(this, arguments);
}

function dropPartyTable() {
  return _dropPartyTable.apply(this, arguments);
}

function _dropPartyTable() {
  _dropPartyTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS party';
            query(queryText);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _dropPartyTable.apply(this, arguments);
}

function dropOfficeTable() {
  return _dropOfficeTable.apply(this, arguments);
}

function _dropOfficeTable() {
  _dropOfficeTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS office';
            query(queryText);

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _dropOfficeTable.apply(this, arguments);
}

function dropUsersTable() {
  return _dropUsersTable.apply(this, arguments);
}

function _dropUsersTable() {
  _dropUsersTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var queryText;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            queryText = 'DROP TABLE IF EXISTS users';
            query(queryText);

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _dropUsersTable.apply(this, arguments);
}

var createAllTables = function createAllTables() {
  createPartyTable();
  createOfficeTable();
  createUsersTable();
  createCandidatesTable(); // pool.end();
};

var dropAllTables = function dropAllTables() {
  dropPartyTable();
  dropOfficeTable();
  dropUsersTable(); // pool.end();
};

pool.on('remove', function () {
  console.log('Database client disconnected'); // process.exit(0);
});
module.exports = {
  createPartyTable: createPartyTable,
  createOfficeTable: createOfficeTable,
  createUsersTable: createUsersTable,
  createAllTables: createAllTables,
  dropPartyTable: dropPartyTable,
  dropOfficeTable: dropOfficeTable,
  dropUsersTable: dropUsersTable,
  dropAllTables: dropAllTables
};

require('make-runnable');
//# sourceMappingURL=index.js.map