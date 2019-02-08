import db from '../models/dbconfig';

class Party {
  static async create(req, res) {
    const { name, hqAddress, logoUrl } = req.body;

    const queryStr = `INSERT INTO party(name, hq_address, logo_url)
      VALUES('${name}', '${hqAddress}', '${logoUrl}') 
      RETURNING id, name`;

    try {
      const { rows } = await db.query(queryStr);
      return res.status(201).json({
        status: 201,
        data: rows,
      });
    } catch (error) {
      return res.status(422).json({
        status: 422,
        error: 'Party already exists in database',
      });
    }
  }

  static async get(req, res) {
    const id = Number(req.params.id);
    let result;

    const queryStr = `SELECT id, name, logo_url 
      FROM party 
      WHERE id = '${id}'`;

    try {
      const { rows, rowCount } = await db.query(queryStr);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          message: 'Requested party not found in database',
        });
      }
      result = rows;
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.detail,
      });
    }

    return res.status(200).json({
      status: 200,
      data: result,
    });
  }

  static async getAll(req, res) {
    const queryStr = `SELECT id, name, logo_url 
      FROM party
      ORDER BY id ASC`;

    try {
      const { rows } = await db.query(queryStr);
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.detail,
      });
    }
  }

  static async updateName(req, res) {
    const id = Number(req.params.id);
    const newName = req.body.name;

    const queryStr = `UPDATE party 
      SET name = '${newName}' 
      WHERE id = '${id}' 
      RETURNING id, name`;

    try {
      const { rows } = await db.query(queryStr);
      console.log('Hello');
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async delete(req, res) {
    const id = Number(req.params.id);
    const queryStr = `DELETE FROM party WHERE id = '${id}'`;

    try {
      await db.query(queryStr);
      return res.status(200).json({
        status: 200,
        message: 'Party deleted successfully.',
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.detail,
      });
    }
  }
}

export default Party;
