"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.officeTable = exports.usersTable = exports.partyTable = exports.pool = void 0;

require("@babel/polyfill");

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});
exports.pool = pool;
var partyTable = "CREATE TABLE IF NOT EXISTS party (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(255) UNIQUE NOT NULL,\n  hq_address VARCHAR NOT NULL,\n  logo_url VARCHAR NOT NULL\n)";
exports.partyTable = partyTable;
var officeTable = "CREATE TABLE IF NOT EXISTS office (\n  id SERIAL PRIMARY KEY,\n  type VARCHAR(128) NOT NULL,\n  name VARCHAR(255) UNIQUE NOT NULL\n)";
exports.officeTable = officeTable;
var usersTable = "CREATE TABLE IF NOT EXISTS users (\n  id SERIAL PRIMARY KEY,\n  first_name VARCHAR(255) NOT NULL,\n  last_name VARCHAR(255) NOT NULL,\n  other_name VARCHAR(255),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  password VARCHAR NOT NULL,\n  phone_number VARCHAR(128) NOT NULL,\n  passport_url VARCHAR NOT NULL,\n  is_admin BOOLEAN\n)";
exports.usersTable = usersTable;
//# sourceMappingURL=testDb.js.map