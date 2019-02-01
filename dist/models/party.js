"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var generateId = function () {
  var id = 7;
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
    }, {
      id: 3,
      name: 'Party Three',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampleThree.com'
    }, {
      id: 4,
      name: 'Party Four',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampleFour.com'
    }, {
      id: 5,
      name: 'Party Five',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampleFive.com'
    }, {
      id: 6,
      name: 'Party Six',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampleSix.com'
    }, {
      id: 7,
      name: 'Party Seven',
      hqAddress: 'Ojota, Lagos, Nigeria',
      logoUrl: 'http://exampleSeven.com'
    }];
  }

  _createClass(Party, [{
    key: "create",
    value: function create(entry) {
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
  }, {
    key: "update",
    value: function update(id, prop) {
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
