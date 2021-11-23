const reportService = require("./reportService");
const responseHandler = require("../../handler/responseHandler");
const HttpStatusCode = require("../../constants/httpstatuscode");

class reportController {
  /* user registration */
  createReport(req, res) {
    console.log('request here ')
    reportService
      .createReport(req, res)
      .then((data) => {
        console.log('ftet then')
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }


getUserReport(req, res) {
  if(req.params.secret != process.env.ADMIN_SECRET){
    return responseHandler.send(
      HttpStatusCode.error.UNAUTHORIZED,
      res,
      {error: "Unauthorized"}
    );
  }
    reportService
      .getUserReport(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }

  getReport(req, res) {
    console.log('request here ',req.params)
    if(req.params.secret != process.env.ADMIN_SECRET)
    { return responseHandler.send(
            HttpStatusCode.error.UNAUTHORIZED,
            res,
            {error: "Unauthorized"}
          );
    }
    reportService
      .getReport(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }
}

module.exports = new reportController();
