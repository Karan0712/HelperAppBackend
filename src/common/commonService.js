let Country = require("country-state-city").Country;
let State = require("country-state-city").State;
let City = require("country-state-city").City;
class commonService {
  async getAllCountries(req, res) {
    try {
      let allCountries = [];
      let data = await Country.getAllCountries();
      data.map((item) => {
        allCountries.push({ label: item.name, value: item.isoCode });
      });
      return allCountries;
    } catch (error) {}
  }
  async getAllStates(req, res) {
    try {
      let allStates = [];
      let data = await State.getStatesOfCountry(req.params.countryCode);
      data.map((item) => {
        allStates.push({ label: item.name, value: item.isoCode });
      });
      return allStates;
    } catch (error) {}
  }

  async getAllCities(req, res) {
    try {
      let allCities = [];
      let data = await City.getCitiesOfState(
        req.body.countryCode,
        req.body.stateCode
      );
      data.map((item) => {
        allCities.push({ label: item.name, value: item.name });
      });
      return allCities;
    } catch (error) {}
  }
  async getCountryByCode(req, res) {
    try {
      return await Country.getCountryByCode(req.body.countryCode);
    } catch (error) {}
  }

  async getStateByCode(req, res) {
    try {
      return await State.getStateByCodeAndCountry(
        req.body.stateCode,
        req.body.countryCode
      );
    } catch (error) {}
  }
}

module.exports = new commonService();
