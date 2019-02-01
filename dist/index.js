"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("./routes/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
var port = process.env.PORT || 3000;
app.use(_party.default);
app.listen(port, function () {
  console.log("Server is ready at port ".concat(port));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map