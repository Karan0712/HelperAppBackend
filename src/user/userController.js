const jwt = require('jsonwebtoken');
const userService = require("./userService");
const responseHandler = require("../../handler/responseHandler");
const HttpStatusCode = require("../../constants/httpstatuscode");

class userController {
  /* user registration */
  createUser(req, res) {
    userService
      .createUser(req, res)
      .then((user) => {
        const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET);
        const data = {
          userId: user.dataValues.id,
          userName: user.dataValues.name,
          userEmail: user.dataValues.email,
          token: token
        };
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        console.log(err)
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }
  getJobUser(req, res) {
    userService
      .getJobUser(req, res)
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
  getCountryUser(req, res) {
    userService
      .getCountryUser(req, res)
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

  getStateUser(req, res) {
    userService
      .getStateUser(req, res)
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
  getCityUser(req, res) {
    userService
      .getCityUser(req, res)
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
  getStateCityUser(req, res) {
    userService
      .getStateCityUser(req, res)
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
  sortUsers(req, res) {
    userService
      .sortUsers(req, res)
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
  updateProfile(req, res) {
    userService
      .changeDetails(req, res)
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

  checkEmailReuse(req, res) {
    userService
      .checkEmail(req, res)
      .then((data, res) => {
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

  getUserBasedOnId(req, res) {
    userService
      .getDetailsById(req, res)
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

  getAllUsers(req, res) {
    userService
      .getAll(req, res)
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
  /* user login */
  login(req, res) {
    userService
      .login(req, res)
      .then((data) => {
        /* condition for data is present or not in users table */
        if (data.rowCount === 0) {
          throw new Error("No record found!");
        }
        const token = jwt.sign({ id: data.userId }, process.env.JWT_SECRET);
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, {...data, token});
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

module.exports = new userController();
