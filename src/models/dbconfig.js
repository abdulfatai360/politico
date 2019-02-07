import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default {
  query(queryText, values) {
    return new Promise((resolve, reject) => {
      pool.query(queryText, values)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
};
