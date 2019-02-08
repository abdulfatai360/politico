import '@babel/polyfill';
import express from 'express';
import { db } from '../models/dbconfig';

const router = express.Router();

router.post('/:id/register', async (req, res) => {
  const { office, party } = req.body;
  const { id } = req.params;

  const queryStr = `INSERT INTO candidates(office, party, candidate)
    VALUES('${Number(office)}', '${Number(party)}', '${Number(id)}') 
    RETURNING office, candidate`;

  try {
    const { rows } = await db.query(queryStr);
    return res.status(201).json({
      status: 201,
      data: rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.detail,
    });
  }
});

export default router;
