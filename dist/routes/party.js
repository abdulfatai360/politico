"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../controllers/party"));

var _middleware = _interopRequireDefault(require("../middleware/middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var validateName = _middleware.default.validateName,
    validateAddress = _middleware.default.validateAddress,
    validateUrl = _middleware.default.validateUrl,
    validateIdParam = _middleware.default.validateIdParam,
    validateNameParam = _middleware.default.validateNameParam;
router.post('/', validateName, validateAddress, validateUrl, _party.default.create);
router.get('/:id', validateIdParam, _party.default.get);
router.get('/', _party.default.getAll);
router.patch('/:id/:name', validateName, validateIdParam, validateNameParam, _party.default.updateName);
router.delete('/:id', validateIdParam, _party.default.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=party.js.map