"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _office = _interopRequireDefault(require("../models/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Office =
/*#__PURE__*/
function () {
  function Office() {
    _classCallCheck(this, Office);
  }

  _createClass(Office, null, [{
    key: "create",
    value: function create(req, res) {
      var office = _office.default.create(req.body);

      return res.status(201).json({
        status: 201,
        data: [office]
      });
    }
  }, {
    key: "get",
    value: function get(req, res) {
      var id = Number(req.params.id);

      var office = _office.default.findOne(id);

      if (!office) {
        return res.status(404).json({
          status: 404,
          error: 'Office record not found in Database'
        });
      }

      return res.status(200).json({
        status: 200,
        data: [office]
      });
    }
  }, {
    key: "getAll",
    value: function getAll(req, res) {
      var officeList = _office.default.findAll();

      if (!officeList.length) {
        return res.status(404).json({
          status: 404,
          error: 'No office record in the Database'
        });
      }

      return res.status(200).json({
        status: 200,
        data: officeList
      });
    }
  }]);

  return Office;
}();

var _default = Office;
exports.default = _default;
//# sourceMappingURL=office.js.map