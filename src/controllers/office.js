import officeDb from '../models/office';

class Office {
  static create(req, res) {
    const office = officeDb.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [office],
    });
  }

  static get(req, res) {
    const id = Number(req.params.id);
    const office = officeDb.findOne(id);

    if (!office) {
      return res.status(404).json({
        status: 404,
        error: 'Office record not found in Database',
      });
    }

    return res.status(200).json({
      status: 200,
      data: [office],
    });
  }

  static getAll(req, res) {
    const officeList = officeDb.findAll();

    if (!officeList.length) {
      return res.status(404).json({
        status: 404,
        error: 'No office record in the Database',
      });
    }

    return res.status(200).json({
      status: 200,
      data: officeList,
    });
  }
}

export default Office;
