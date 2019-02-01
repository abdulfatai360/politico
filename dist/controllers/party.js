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
    key: "post",
    value: function post(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          hqAddress = _req$body.hqAddress,
          logoUrl = _req$body.logoUrl;

      if (!name) {
        return res.status(422).json({
          status: 422,
          error: 'Party name is required'
        });
      }

      if (!hqAddress) {
        return res.status(422).json({
          status: 422,
          error: 'Party address field is required'
        });
      }

      if (!logoUrl) {
        return res.status(422).json({
          status: 422,
          error: 'Party logo field is required'
        });
      }

      if (typeof name !== 'string') {
        return res.status(422).json({
          status: 422,
          error: 'Party name is invalid'
        });
      }

      if (typeof hqAddress !== 'string') {
        return res.status(422).json({
          status: 422,
          error: 'Party address field is invalid'
        });
      }

      if (typeof logoUrl !== 'string') {
        return res.status(422).json({
          status: 422,
          error: 'Party logo field is invalid'
        });
      }

      var party = _party.default.create(req.body);

      return res.status(201).json({
        status: 201,
        data: [party]
      });
    }
  }, {
    key: "getOne",
    value: function getOne(req, res) {
      var id = req.params.id;
      id = Number(id);

      if (Number.isNaN(id)) {
        return res.status(422).json({
          status: 422,
          error: 'Party ID is invalid'
        });
      }

      var party = _party.default.findOne(id);

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found'
        });
      }

      var name = party.name,
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

      var filter = _party.default.findAll().map(function (_ref) {
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
        data: filter
      });
    }
  }, {
    key: "patch",
    value: function patch(req, res) {
      if (!req.body.name) {
        return res.status(400).json({
          status: 400,
          error: 'Name field must be supplied'
        });
      }

      if (!req.params.id) {
        return res.status(400).json({
          status: 400,
          error: 'Id parameter is missing'
        });
      }

      if (!req.params.name) {
        return res.status(400).json({
          status: 400,
          error: 'Name parameter is missing'
        });
      }

      if (Number.isNaN(Number(req.params.id))) {
        return res.status(422).json({
          status: 422,
          error: 'Id parameter is invalid'
        });
      }

      if (!Number.isNaN(Number(req.params.name))) {
        return res.status(422).json({
          status: 422,
          error: 'Name parameter is invalid'
        });
      }

      if (Object.keys(req.params).length > 2 || Object.keys(req.body).length > 2) {
        return res.status(422).json({
          status: 422,
          error: 'Excess fields or parameters. Only name field can be edited'
        });
      }

      if (Object.keys(req.params).length < 2 || Object.keys(req.body).length < 1) {
        return res.status(400).json({
          status: 400,
          error: 'Inadequate parameters field submission'
        });
      }

      var party = _party.default.findOne(Number(req.params.id));

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found'
        });
      }

      return res.status(200).json({
        status: 200,
        data: [_party.default.update(Number(req.params.id), req.body.name)]
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id = req.params.id;
      id = Number(id);

      if (Number.isNaN(id)) {
        return res.status(422).json({
          status: 422,
          error: 'Party ID is invalid'
        });
      }

      var party = _party.default.findOne(id);

      if (!party) {
        return res.status(404).json({
          status: 404,
          error: 'Party not found'
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
