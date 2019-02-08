import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import db from '../models/dbconfig';

dotenv.config();

async function login(req, res) {
  const { email } = req.body;
  const findUserQuery = `SELECT * FROM users WHERE email='${email}'`;

  try {
    const { rows } = await db.query(findUserQuery);
    const token = jwt.sign(rows[0], process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

    return res.status(200).json({
      status: 200,
      data: [{
        token,
        user: rows[0],
      }],
    });
  } catch (error) {
    return res.status(422).json({
      status: 422,
      error: error.detail,
    });
  }
}

export default login;
