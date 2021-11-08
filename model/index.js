const dbConfig = require("../db/dbQuery");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.options.database,
  dbConfig.options.user,
  dbConfig.options.password,
  {
    host: dbConfig.options.host,
    dialect: "postgres",
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel")(sequelize, Sequelize);

db.posts = require("./postModel")(sequelize, Sequelize);
db.messages = require("./messageModel")(sequelize, Sequelize);
module.exports = db;
