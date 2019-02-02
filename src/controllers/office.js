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

    const allOffices = officeDb.findAll();
    const duplicate = allOffices.find(elem => elem.name === name);
    if (duplicate) {
      return res.status(422).json({
        status: 422,
        error: 'Office name already exist',
      });
    }

    const office = officeDb.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [office],
    });
  }
}

export default Office;
