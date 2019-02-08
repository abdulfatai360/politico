"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parties = _interopRequireDefault(require("./routes/parties"));

var _offices = _interopRequireDefault(require("./routes/offices"));

var _signup = _interopRequireDefault(require("./routes/signup"));

var _login = _interopRequireDefault(require("./routes/login"));

var _office = _interopRequireDefault(require("./routes/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var app = (0, _express.default)();

if (!process.env.JWT_SECRET_KEY) {
  process.exit(1);
}

app.use(_express.default.json());
app.use('/api/v1/parties', _parties.default);
app.use('/api/v1/offices', _offices.default);
app.use('/api/v1/auth/signup', _signup.default);
app.use('/api/v1/auth/login', _login.default);
app.use('/api/v1/office', _office.default);
app.all('/*', function (req, res) {
  res.status(404).json({
    status: 404,
    error: 'Invalid request'
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server is ready at port ".concat(port));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map