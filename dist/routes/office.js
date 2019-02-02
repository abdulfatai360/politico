"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _office = _interopRequireDefault(require("../controllers/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _office.default.post);
router.get('/:id', _office.default.getOffice);
router.get('/', _office.default.getAllOffices);
var _default = router;
exports.default = _default;
//# sourceMappingURL=office.js.map