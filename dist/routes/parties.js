"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _parties = _interopRequireDefault(require("../controllers/parties"));

var _userAuth = _interopRequireDefault(require("../middleware/userAuth"));

var _adminAuth = _interopRequireDefault(require("../middleware/adminAuth"));

var _validateParty = _interopRequireDefault(require("../middleware/validateParty"));

var _checkIfDeleted = _interopRequireDefault(require("../middleware/checkIfDeleted"));

var _checkFieldCount = _interopRequireDefault(require("../middleware/checkFieldCount"));

var _validateId = _interopRequireDefault(require("../middleware/validateId"));

var _validatePatch = _interopRequireDefault(require("../middleware/validatePatch"));

var _validateNameParam = _interopRequireDefault(require("../middleware/validateNameParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _userAuth.default, _adminAuth.default, _validateParty.default, _parties.default.create);
router.get('/:id', _userAuth.default, _validateId.default, _parties.default.get);
router.get('/', _userAuth.default, _parties.default.getAll);
router.patch('/:id/:name', _userAuth.default, _adminAuth.default, _checkFieldCount.default, _validatePatch.default, _validateId.default, _validateNameParam.default, _parties.default.updateName);
router.delete('/:id', _userAuth.default, _adminAuth.default, _checkIfDeleted.default, _validateId.default, _parties.default.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=parties.js.map