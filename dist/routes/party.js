"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../controllers/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

var router = _express.default.Router();

router.post('/', _party.default.post);
router.get('/:id', _party.default.getParty);
router.get('/', _party.default.getAllParties);
router.patch('/:id/:name', _party.default.updatePartyName);
router.delete('/:id', _party.default.deleteParty);
app.use('/api/v1/parties', router);
var _default = app;
exports.default = _default;
//# sourceMappingURL=party.js.map