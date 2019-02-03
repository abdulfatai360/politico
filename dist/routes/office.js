"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _office = _interopRequireDefault(require("../controllers/office"));

var _middleware = _interopRequireDefault(require("../middleware/middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var validateName = _middleware.default.validateName,
    validateOfficeType = _middleware.default.validateOfficeType,
    validateIdParam = _middleware.default.validateIdParam;
router.post('/', validateName, validateOfficeType, _office.default.create);
router.get('/:id', validateIdParam, _office.default.get);
router.get('/', _office.default.getAll);
var _default = router;
exports.default = _default;
//# sourceMappingURL=office.js.map