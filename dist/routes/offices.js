"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _offices = _interopRequireDefault(require("../controllers/offices"));

var _validateOffice = _interopRequireDefault(require("../middleware/validateOffice"));

var _validateId = _interopRequireDefault(require("../middleware/validateId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _validateOffice.default, _offices.default.create);
router.get('/:id', _validateId.default, _offices.default.get);
router.get('/', _offices.default.getAll);
var _default = router;
exports.default = _default;
//# sourceMappingURL=offices.js.map