import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { db } from '../models/dbconfig';

dotenv.config();

async function signup(req, res) {
  const { password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(hash);

  const queryText = `INSERT INTO users(
    first_name, last_name, other_name, email, 
    password, phone_number, passport_url, is_admin) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
    RETURNING *`;

  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.othername,
    req.body.email,
    hash,
    req.body.phoneNumber,
    req.body.passportUrl,
    req.body.isAdmin,
  ];

  try {
    const { rows } = await db.query(queryText, values);
    const token = jwt.sign(rows[0], process.env.JWT_SECRET_KEY);
    console.log('token', token);

    return res.header('x-auth-token', token).status(201).json({
      status: 201,
      data: [{
        token,
        user: rows[0],
      }],
    });
  } catch (error) {
    console.log('hey');
    return res.status(500).json({
      status: 500,
      error,
    });
  }
}

export default signup;
