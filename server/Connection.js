const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: 0,
  },
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: 0,
  },
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
module.exports = pool;
