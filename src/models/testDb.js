import '@babel/polyfill';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

const partyTable = `CREATE TABLE IF NOT EXISTS party (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  hq_address VARCHAR NOT NULL,
  logo_url VARCHAR NOT NULL
)`;

const officeTable = `CREATE TABLE IF NOT EXISTS office (
  id SERIAL PRIMARY KEY,
  type VARCHAR(128) NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL
)`;

const usersTable = `CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  other_name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  phone_number VARCHAR(128) NOT NULL,
  passport_url VARCHAR NOT NULL,
  is_admin BOOLEAN
)`;

export {
  pool, partyTable, usersTable, officeTable,
};
