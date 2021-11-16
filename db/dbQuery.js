const Pool = require("pg").Pool;
require("dotenv").config();
const pool

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
/* configuration for postgres database */

console.log(process.env,"envs")
  const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    //COMMENT OUT SSL BLOCK BELOW IF IN DEVELOPMENT
    ssl: {
        rejectUnauthorized: false,
    },
});
}
module.exports = pool;
