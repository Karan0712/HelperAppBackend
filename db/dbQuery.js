const Pool = require("pg").Pool;

/* configuration for postgres database */
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sg-helpers",
  password: "CSK0712",
  port: 5432,
});
module.exports = pool;
