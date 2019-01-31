"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var generateId = function () {
  var id = 2;
  return function () {
    id += 1;
    return id;
  };
}();

var Party =
/*#__PURE__*/
function () {
  function Party() {
    _classCallCheck(this, Party);

    this.list = [{
      id: 1,
      name: 'Party One',
      hqAddress: 'Berger, Lagos, Nigeria',
      logoUrl: 'http://exampleone.com'
    }, {
      id: 2,
      name: 'Party Two',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampletwo.com'
    }];
  }

  _createClass(Party, [{
    key: "post",
    value: function post(entry) {
      var name = entry.name,
          hqAddress = entry.hqAddress,
          logoUrl = entry.logoUrl;
      var id = generateId();
      this.list.push({
        id: id,
        name: name,
        hqAddress: hqAddress,
        logoUrl: logoUrl
      });
      return {
        id: id,
        name: name
      };
    }
  }, {
    key: "getOne",
    value: function getOne(id) {
      return this.list.find(function (elem) {
        return elem.id === id;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.list;
    }
  }, {
    key: "patch",
    value: function patch(id, prop) {
      var party = this.list.find(function (elem) {
        return elem.id === id;
      });
      var i = this.list.indexOf(party);
      this.list[i].name = prop;
      var name = this.list[i].name;
      return {
        id: id,
        name: name
      };
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var party = this.list.find(function (elem) {
        return elem.id === id;
      });
      var index = this.list.indexOf(party);
      this.list.splice(index, 1);
      return {
        message: 'Party deleted successfully.'
      };
    }
  }]);

  return Party;
}();

var _default = new Party();

exports.default = _default;
//# sourceMappingURL=party.js.map