const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'nishu9829',
  port: 5432,
});

module.exports = pool;
