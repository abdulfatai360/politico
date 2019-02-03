import partyDb from '../models/party';

class Party {
  static create(req, res) {
    const party = partyDb.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [party],
    });
  }

  static get(req, res) {
    const party = partyDb.findOne(Number(req.params.id));

    if (!party) {
      return res.status(404).json({
        status: 404,
        error: 'Party not found in Database',
      });
    }

    const { id, name, logoUrl } = party;
    return res.status(200).json({
      status: 200,
      data: [{ id, name, logoUrl }],
    });
  }

  static getAll(req, res) {
    if (!partyDb.findAll().length) {
      return res.status(404).json({
        status: 404,
        error: 'No party in the Database',
      });
    }

    const resSpec = partyDb.findAll()
      .map(({ id, name, logoUrl }) => ({ id, name, logoUrl }));

    return res.status(200).json({
      status: 200,
      data: resSpec,
    });
  }

  static updateName(req, res) {
    const fieldsToUpdate = Object.keys(req.body);
    const id = Number(req.params.id);

    if (fieldsToUpdate.length > 1) {
      return res.status(422).json({
        status: 422,
        error: 'Excess fields. Only name field can be updated',
      });
    }

    const party = partyDb.findOne(id);

    if (!party) {
      return res.status(404).json({
        status: 404,
        error: 'Party not found in Database',
      });
    }

    return res.status(200).json({
      status: 200,
      data: [partyDb.update(id, req.body.name)],
    });
  }

  static delete(req, res) {
    const id = Number(req.params.id);

    const party = partyDb.findOne(id);
    if (!party) {
      return res.status(404).json({
        status: 404,
        error: 'Party not found in Database',
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
