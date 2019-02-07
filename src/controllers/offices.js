import { db } from '../models/dbconfig';

class Office {
  static async create(req, res) {
    const { type, name } = req.body;
    const queryStr = `INSERT INTO office(type, name)
      VALUES('${type}', '${name}') RETURNING *`;

    try {
      const { rows } = await db.query(queryStr);
      return res.status(201).json({
        status: 201,
        data: rows,
      });
    } catch (error) {
      return res.status(422).json({
        status: 422,
        error: 'Office already exists in database',
      });
    }
  }

  static async get(req, res) {
    const queryStr = `SELECT id, type, name 
      FROM office 
      WHERE id = '${Number(req.params.id)}'`;

    try {
      const { rows, rowCount } = await db.query(queryStr);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Requested office not found in database',
        });
      }

      return res.status(200).json({
        status: 200,
        data: rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.detail,
      });
    }
  }

  static async getAll(req, res) {
    const queryStr = `SELECT id, type, name 
      FROM office
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
}

export default Office;
