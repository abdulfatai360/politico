"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _party = _interopRequireDefault(require("../models/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Party =
/*#__PURE__*/
function () {
  function Party() {
    _classCallCheck(this, Party);
  }

  _createClass(Party, null, [{
    key: "create",
    value: function create(req, res) {
      var party = _party.default.create(req.body);

      return res.status(201).json({
        status: 201,
        data: [party]
      });
    }
  }, {
    key: "get",
    value: function get(req, res) {
      var party = _party.default.findOne(Number(req.params.id));

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found in Database'
        });
      }

      var id = party.id,
          name = party.name,
          logoUrl = party.logoUrl;
      return res.status(200).json({
        status: 200,
        data: [{
          id: id,
          name: name,
          logoUrl: logoUrl
        }]
      });
    }
  }, {
    key: "getAll",
    value: function getAll(req, res) {
      if (!_party.default.findAll().length) {
        return res.status(404).json({
          status: 404,
          error: 'No party in the Database'
        });
      }

      var resSpec = _party.default.findAll().map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            logoUrl = _ref.logoUrl;
        return {
          id: id,
          name: name,
          logoUrl: logoUrl
        };
      });

      return res.status(200).json({
        status: 200,
        data: resSpec
      });
    }
  }, {
    key: "updateName",
    value: function updateName(req, res) {
      var fieldsToUpdate = Object.keys(req.body);
      var id = Number(req.params.id);

      if (fieldsToUpdate.length > 1) {
        return res.status(422).json({
          status: 422,
          error: 'Excess fields. Only name field can be updated'
        });
      }

      var party = _party.default.findOne(id);

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found in Database'
        });
      }

      return res.status(200).json({
        status: 200,
        data: [_party.default.update(id, req.body.name)]
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id = Number(req.params.id);

      var party = _party.default.findOne(id);

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found in Database'
        });
      }

      var response = _party.default.delete(id);

      return res.status(200).json({
        status: 200,
        data: [response]
      });
    }
  }]);

  return Party;
}();

var _default = Party;
exports.default = _default;
//# sourceMappingURL=party.js.map