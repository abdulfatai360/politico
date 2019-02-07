import express from 'express';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import db from '../models/dbconfig';

const router = express.Router();
dotenv.config();

router.post('/', async (req, res) => {
  const { password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

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
    return res.status(422).json({
      status: 422,
      error: error.detail,
    });
  }
});

export default router;
