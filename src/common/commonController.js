const commonService = require("./commonService");

const responseHandler = require("../../handler/responseHandler");
const HttpStatusCode = require("../../constants/httpstatuscode");

class commonController {
  getAllCountries(req, res) {
    commonService
      .getAllCountries(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
  getAllStates(req, res) {
    commonService
      .getAllStates(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
  getAllCities(req, res) {
    commonService
      .getAllCities(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
  getCountryCode(req, res) {
    commonService
      .getCountryByCode(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
  getStateCode(req, res) {
    commonService
      .getStateByCode(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
}

module.exports = new commonController();
