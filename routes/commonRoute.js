const path = require("path");
const express = require("express");
const router = express.Router();
const {
  getAllCities,
  getAllCountries,
  getAllStates,
  getCountryCode,
  getStateCode,
} = require("../src/common/commonController");
const {
  getCountryByCode,
  getStateByCode,
} = require("../src/common/commonService");

router.get("/countryStates/:countryCode", getAllStates);
router.post("/cities", getAllCities);
router.get("/allCountries", getAllCountries);
router.post("/countryByCode", getCountryCode);
router.post("/stateByCode", getStateCode);

module.exports = router;
