import partyDb from '../models/party';

class Party {
  static post(req, res) {
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

    const allParties = partyDb.findAll();
    const duplicate = allParties.find(elem => elem.name === name);
    if (duplicate) {
      return res.status(422).json({
        status: 422,
        error: 'Party name already exist',
      });
    }

    const party = partyDb.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [party],
    });
  }

  static getParty(req, res) {
    let { id } = req.params;
    id = Number(id);

    if (Number.isNaN(id)) {
      return res.status(422).json({
        status: 422,
        error: 'Party ID is invalid',
      });
    }

    const party = partyDb.findOne(id);

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
  }

  static getAllParties(req, res) {
    if (!partyDb.findAll().length) {
      return res.status(404).json({
        status: 404,
        error: 'No party in the Database',
      });
    }

    const filter = partyDb.findAll()
      .map(({ id, name, logoUrl }) => ({ id, name, logoUrl }));

    return res.status(200).json({
      status: 200,
      data: filter,
    });
  }

  static updatePartyName(req, res) {
    if (!req.body.name) {
      return res.status(400).json({
        status: 400,
        error: 'Name field must be supplied',
      });
    }

    if (!req.params.id) {
      return res.status(400).json({
        status: 400,
        error: 'Id parameter is missing',
      });
    }

    if (!req.params.name) {
      return res.status(400).json({
        status: 400,
        error: 'Name parameter is missing',
      });
    }

    if (Number.isNaN(Number(req.params.id))) {
      return res.status(422).json({
        status: 422,
        error: 'Id parameter is invalid',
      });
    }

    if (!Number.isNaN(Number(req.params.name))) {
      return res.status(422).json({
        status: 422,
        error: 'Name parameter is invalid',
      });
    }

    if (Object.keys(req.params).length > 2 || Object.keys(req.body).length > 2) {
      return res.status(422).json({
        status: 422,
        error: 'Excess fields or parameters. Only name field can be edited',
      });
    }

    if (Object.keys(req.params).length < 2 || Object.keys(req.body).length < 1) {
      return res.status(400).json({
        status: 400,
        error: 'Inadequate parameters field submission',
      });
    }

    const party = partyDb.findOne(Number(req.params.id));

    if (!party) {
      return res.status(404).json({
        status: 404,
        error: 'Party not found',
      });
    }

    return res.status(200).json({
      status: 200,
      data: [partyDb.update(Number(req.params.id), req.body.name)],
    });
  }

  static deleteParty(req, res) {
    let { id } = req.params;
    id = Number(id);

    if (Number.isNaN(id)) {
      return res.status(422).json({
        status: 422,
        error: 'Party ID is invalid',
      });
    }

    const party = partyDb.findOne(id);
    if (!party) {
      return res.status(404).json({
        status: 404,
        error: 'Party not found',
      });
    }

    const response = partyDb.delete(id);
    return res.status(200).json({
      status: 200,
      data: [response],
    });
  }
}

export default Party;
