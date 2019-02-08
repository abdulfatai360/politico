"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _signup = _interopRequireDefault(require("../controllers/signup"));

var _validateSignup = _interopRequireDefault(require("../middleware/validateSignup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _validateSignup.default, _signup.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=signup.js.map