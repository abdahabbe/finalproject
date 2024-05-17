const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "abe273",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "salesinvetory",
});

module.exports = pool;
