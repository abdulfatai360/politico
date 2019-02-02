"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var idGenerator = function () {
  var id = 3;
  return function () {
    id += 1;
    return id;
  };
}();

var Office =
/*#__PURE__*/
function () {
  function Office() {
    _classCallCheck(this, Office);

    this.list = [{
      id: 1,
      type: 'Federal',
      name: 'President'
    }, {
      id: 2,
      type: 'Legislative',
      name: 'Senate'
    }, {
      id: 2,
      type: 'State',
      name: 'Governor'
    }];
  }

  _createClass(Office, [{
    key: "create",
    value: function create(entry) {
      var type = entry.type,
          name = entry.name;
      var id = idGenerator();
      this.list.push({
        id: id,
        type: type,
        name: name
      });
      return {
        id: id,
        type: type,
        name: name
      };
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.list.find(function (elem) {
        return elem.id === id;
      });
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.list;
    }
  }]);

  return Office;
}();

var _default = new Office();

exports.default = _default;
//# sourceMappingURL=office.js.map