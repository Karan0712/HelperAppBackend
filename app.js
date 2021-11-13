const express = require("express");
var morgan = require('morgan')
const userRouter = require("./routes/userRoute");
const commonRouter = require("./routes/commonRoute");
const postRouter = require("./routes/postRoute");
const messageRouter = require("./routes/messageRoute");
const app = express();
const port = "5000";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./model");

// db.sequelize.sync();

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
    BUILD_NUMBER: process.env.BUILD_NUMBER || "SNAPSHOT",
    APP_ENV: process.env.APP_ENV || "LOCAL",
  });
});

app.use("/api", userRouter);
app.use("/api", commonRouter);
app.use("/api", postRouter);
app.use("/api", messageRouter);
app.set("port", port);
app.listen(port);
module.exports = app;
