import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

const db = {
  query(queryText, values) {
    return new Promise((resolve, reject) => {
      pool.query(queryText, values)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
};

export { pool, db };
