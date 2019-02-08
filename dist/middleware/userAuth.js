"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

function userAuth(req, res, next) {
  var token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'Unauthorized access to perform this operation'
    });
  }

  try {
    var payload = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET_KEY);

    req.user = payload;
    return next();
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: 'Invalid token credentials'
    });
  }
}

var _default = userAuth;
exports.default = _default;
//# sourceMappingURL=userAuth.js.map