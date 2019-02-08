"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../controllers/party"));

var _userAuth = _interopRequireDefault(require("../middleware/userAuth"));

var _validateParty = _interopRequireDefault(require("../middleware/validateParty"));

var _checkIfDeleted = _interopRequireDefault(require("../middleware/checkIfDeleted"));

var _checkFieldCount = _interopRequireDefault(require("../middleware/checkFieldCount"));

var _validateId = _interopRequireDefault(require("../middleware/validateId"));

var _validatePatch = _interopRequireDefault(require("../middleware/validatePatch"));

var _validateNameParam = _interopRequireDefault(require("../middleware/validateNameParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(_userAuth.default);
router.post('/', _validateParty.default, _party.default.create);
router.get('/:id', _validateId.default, _party.default.get);
router.get('/', _party.default.getAll);
router.patch('/:id/:name', _checkFieldCount.default, _validatePatch.default, _validateId.default, _validateNameParam.default, _party.default.updateName);
router.delete('/:id', _checkIfDeleted.default, _validateId.default, _party.default.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=party.js.map