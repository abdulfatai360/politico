import '@babel/polyfill';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgresdb01@127.0.0.1:5433/politico',
});

pool.on('connect', () => {
  console.log('Connected to Database');
});

async function query(queryText) {
  try {
    const dbResponse = await pool.query(queryText);
    console.log(dbResponse);
    pool.end();
  } catch (error) {
    console.log(error);
    pool.end();
  }
}

async function createPartyTable() {
  const queryText = `CREATE TABLE IF NOT EXISTS party (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    hq_address VARCHAR NOT NULL,
    logo_url VARCHAR NOT NULL
  )`;

  query(queryText);
}

async function createOfficeTable() {
  const queryText = `CREATE TABLE IF NOT EXISTS office (
    id SERIAL PRIMARY KEY,
    type VARCHAR(128) NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
  )`;

  query(queryText);
}

async function createUsersTable() {
  const queryText = `CREATE TABLE IF NOT EXISTS users (
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

  query(queryText);
}

async function dropPartyTable() {
  const queryText = 'DROP TABLE IF EXISTS party';
  query(queryText);
}

async function dropOfficeTable() {
  const queryText = 'DROP TABLE IF EXISTS office';
  query(queryText);
}

async function dropUsersTable() {
  const queryText = 'DROP TABLE IF EXISTS users';
  query(queryText);
}

const createAllTables = () => {
  createPartyTable();
  createOfficeTable();
  createUsersTable();
};


const dropAllTables = () => {
  dropPartyTable();
  dropOfficeTable();
  dropUsersTable();
};

pool.on('remove', () => {
  console.log('Database client disconnected');
  process.exit(0);
});

module.exports = {
  createPartyTable,
  createOfficeTable,
  createUsersTable,
  createAllTables,
  dropPartyTable,
  dropOfficeTable,
  dropUsersTable,
  dropAllTables,
};

require('make-runnable');
