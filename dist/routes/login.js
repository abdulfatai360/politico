"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("../controllers/login"));

var _validateLogin = _interopRequireDefault(require("../middleware/validateLogin"));

var _validateLoginCred = _interopRequireDefault(require("../middleware/validateLoginCred"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _validateLogin.default, _validateLoginCred.default, _login.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=login.js.map