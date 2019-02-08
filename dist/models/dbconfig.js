"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.pool = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});
exports.pool = pool;
var db = {
  query: function query(queryText, values) {
    return new Promise(function (resolve, reject) {
      pool.query(queryText, values).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    });
  }
};
exports.db = db;
//# sourceMappingURL=dbconfig.js.map