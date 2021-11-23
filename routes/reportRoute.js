const router = require("express").Router();
const {
  createReport, getUserReport, getReport
} = require("../src/report/reportController");

router.post("/report",createReport );

router.get("/report/user/:user_id/:secret",getUserReport );
router.get("/report/:secret",getReport );

module.exports = router;
