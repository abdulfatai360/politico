import officeDb from '../models/office';

class Office {
  static post(req, res) {
    const { type, name } = req.body;

    if (!type) {
      return res.status(400).json({
        status: 400,
        error: 'Office type is required',
      });
    }

    if (!name) {
      return res.status(400).json({
        status: 400,
        error: 'Office name is required',
      });
    }

    if (typeof type !== 'string') {
      return res.status(422).json({
        status: 422,
        error: 'Office type is invalid',
      });
    }

    if (typeof name !== 'string') {
      return res.status(422).json({
        status: 422,
        error: 'Office name is invalid',
      });
    }

    const office = officeDb.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [office],
    });
  }

  static getOffice(req, res) {
    let { id } = req.params;
    id = Number(id);

    if (Number.isNaN(id)) {
      return res.status(422).json({
        status: 422,
        error: 'Office ID is invalid',
      });
    }

    const office = officeDb.findOne(id);

    if (!office) {
      return res.status(404).json({
        status: 404,
        error: 'Office not found',
      });
    }

    return res.status(200).json({
      status: 200,
      data: [office],
    });
  }
}

export default Office;
