const express = require('express');
const partyDb = require('./models/party');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


/* **** POST /api/v1/parties endpoint **** */

app.post('/api/v1/parties', (req, res) => {
  const { name, hqAddress, logoUrl } = req.body;

  if (!name) {
    return res.status(422).json({
      status: 422,
      error: 'Party name is required',
    });
  }

  if (!hqAddress) {
    return res.status(422).json({
      status: 422,
      error: 'Party address field is required',
    });
  }

  if (!logoUrl) {
    return res.status(422).json({
      status: 422,
      error: 'Party logo field is required',
    });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({
      status: 422,
      error: 'Party name is invalid',
    });
  }

  if (typeof hqAddress !== 'string') {
    return res.status(422).json({
      status: 422,
      error: 'Party address field is invalid',
    });
  }

  if (typeof logoUrl !== 'string') {
    return res.status(422).json({
      status: 422,
      error: 'Party logo field is invalid',
    });
  }

  const party = partyDb.post(req.body);
  return res.status(201).json({
    status: 201,
    data: [party],
  });
});

/* **** GET /api/v1/parties/<party-id> endpoint **** */

app.get('/api/v1/parties/:id', (req, res) => {
  let { id } = req.params;
  id = Number(id);

  if (Number.isNaN(id)) {
    return res.status(422).json({
      status: 422,
      error: 'Party ID is invalid',
    });
  }

  const party = partyDb.getOne(id);

  if (!party) {
    return res.status(404).json({
      status: 404,
      error: 'Party not found',
    });
  }

  const { name, logoUrl } = party;
  return res.status(200).json({
    status: 200,
    data: [{ id, name, logoUrl }],
  });
});


app.listen(port, () => {
  console.log(`Server is ready at port ${port}`);
});

module.exports = app;
