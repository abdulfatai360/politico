"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../controllers/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', _party.default.post);
router.get('/:id', _party.default.getParty);
router.get('/', _party.default.getAllParties);
router.patch('/:id/:name', _party.default.updatePartyName);
router.delete('/:id', _party.default.deleteParty);
var _default = router;
exports.default = _default;
//# sourceMappingURL=party.js.map