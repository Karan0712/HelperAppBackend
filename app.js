const express = require("express");
var morgan = require('morgan')
const userRouter = require("./routes/userRoute");
const commonRouter = require("./routes/commonRoute");
const postRouter = require("./routes/postRoute");
const messageRouter = require("./routes/messageRoute");
const reportRouter = require("./routes/reportRoute");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./model");
const dbConfig = require("./db/dbQuery");

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// db.sequelize.sync({ alter: true });
app.use(morgan('combined'))

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API test" });
});

app.get("/api/healthcheck", (req, res) => {
  res.status(200).json({
    process: process.env,
    BUILD_NUMBER: process.env.BUILD_NUMBER || "SNAPSHOT",
    APP_ENV: process.env.APP_ENV || "LOCAL",
  });
});

app.use("/api", reportRouter);
app.use("/api", userRouter);
app.use("/api", commonRouter);
app.use("/api", postRouter);
app.use("/api", messageRouter);
app.set("port", port);
app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

module.exports = app;
