"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Middleware =
/*#__PURE__*/
function () {
  function Middleware() {
    _classCallCheck(this, Middleware);
  }

  _createClass(Middleware, null, [{
    key: "validateName",
    value: function validateName(req, res, next) {
      var name = req.body.name;

      if (!name) {
        return res.status(400).json({
          status: 400,
          error: 'Name field is required'
        });
      }

      return next();
    }
  }, {
    key: "validateAddress",
    value: function validateAddress(req, res, next) {
      var hqAddress = req.body.hqAddress;

      if (!hqAddress) {
        return res.status(422).json({
          status: 422,
          error: 'Address field is required'
        });
      }

      return next();
    }
  }, {
    key: "validateUrl",
    value: function validateUrl(req, res, next) {
      var logoUrl = req.body.logoUrl;

      if (!logoUrl) {
        return res.status(422).json({
          status: 422,
          error: 'Image field is required'
        });
      }

      return next();
    }
  }, {
    key: "validateIdParam",
    value: function validateIdParam(req, res, next) {
      var id = req.params.id;
      id = Number(id);

      if (Number.isNaN(id)) {
        return res.status(422).json({
          status: 422,
          error: 'ID parameter is invalid. Must be a number'
        });
      }

      return next();
    }
  }, {
    key: "validateNameParam",
    value: function validateNameParam(req, res, next) {
      var name = req.params.name;

      if (name !== 'name') {
        return res.status(422).json({
          status: 422,
          error: 'Invalid parameter. Only name field can be updated'
        });
      }

      return next();
    }
  }, {
    key: "validateOfficeType",
    value: function validateOfficeType(req, res, next) {
      var type = req.body.type;

      if (!type) {
        return res.status(400).json({
          status: 400,
          error: 'Type field is required'
        });
      }

      return next();
    }
  }]);

  return Middleware;
}();

var _default = Middleware;
exports.default = _default;
//# sourceMappingURL=middleware.js.map