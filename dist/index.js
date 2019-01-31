"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("./models/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
var port = process.env.PORT || 3000;
/* **** POST /api/v1/parties endpoint **** */

app.post('/api/v1/parties', function (req, res) {
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

  var party = _party.default.post(req.body);

  return res.status(201).json({
    status: 201,
    data: [party]
  });
});
/* **** GET /api/v1/parties/<party-id> endpoint **** */

app.get('/api/v1/parties/:id', function (req, res) {
  var id = req.params.id;
  id = Number(id);

  if (Number.isNaN(id)) {
    return res.status(422).json({
      status: 422,
      error: 'Party ID is invalid'
    });
  }

  var party = _party.default.getOne(id);

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
});
/* **** GET /api/v1/parties endpoint **** */

app.get('/api/v1/parties', function (req, res) {
  if (!_party.default.getAll().length) {
    return res.status(404).json({
      status: 404,
      error: 'No party in the Database'
    });
  }

  var filter = _party.default.getAll().map(function (_ref) {
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
});
app.listen(port, function () {
  console.log("Server is ready at port ".concat(port));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map