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
    key: "post",
    value: function post(req, res) {
      var _req$body = req.body,
          type = _req$body.type,
          name = _req$body.name;

      if (!type) {
        return res.status(400).json({
          status: 400,
          error: 'Office type is required'
        });
      }

      if (!name) {
        return res.status(400).json({
          status: 400,
          error: 'Office name is required'
        });
      }

      if (typeof type !== 'string') {
        return res.status(422).json({
          status: 422,
          error: 'Office type is invalid'
        });
      }

      if (typeof name !== 'string') {
        return res.status(422).json({
          status: 422,
          error: 'Office name is invalid'
        });
      }

      var allOffices = _office.default.findAll();

      var duplicate = allOffices.find(function (elem) {
        return elem.name === name;
      });

      if (duplicate) {
        return res.status(422).json({
          status: 422,
          error: 'Office name already exist'
        });
      }

      var office = _office.default.create(req.body);

      return res.status(201).json({
        status: 201,
        data: [office]
      });
    }
  }]);

  return Office;
}();

var _default = Office;
exports.default = _default;
//# sourceMappingURL=office.js.map