import bcrypt from 'bcryptjs';
import db from '../models/dbconfig';

async function validateLoginCred(req, res, next) {
  const { email, password } = req.body;
  const findUserQuery = `SELECT * FROM users WHERE email='${email}'`;

  try {
    const { rows, rowCount } = await db.query(findUserQuery);
    const validPassword = await bcrypt.compare(password, rows[0].password);

    if (rowCount === 0 && !validPassword) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid email or password',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error,
    });
  }

  return next();
}

export default validateLoginCred;
