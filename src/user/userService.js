const db = require("../../model");
const Users = db.users;
const Helper = require("../../Helper/helper");
const Sequelize = require("sequelize");

const Op = Sequelize.Op;

// const { where } = require("sequelize/types");

class userService {
  /* User registration function */
  async createUser(req, res) {
    try {
      const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        profession: req.body.profession,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        currentCountry: req.body.currentCountry,
        currentState: req.body.currentState,
        currentCity: req.body.currentCity,
        password: Helper.hashPassword(req.body.password),
        anonymous: req.body.anonymous,
      };

      return await Users.create(user);
    } catch (error) {
      throw error;
    }
  }
  /* fetch user details from users table based on id */

  async getUserById(id) {
    try {
      return await Users.findOne({ where: { id: id } });
    } catch (error) {}
  }

  async getAll(req, res) {
    try {
      return await Users.findAll({
        where: { id: { [Op.ne]: req.body.id } },
        order: [["id", "DESC"]],
      });
    } catch (error) {}
  }

  async changeDetails(req, res) {
    try {
      const token = {
        name: req.body.name,
        username: req.body.username,
        profession: req.body.profession,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        currentCountry: req.body.currentCountry,
        currentState: req.body.currentState,
        currentCity: req.body.currentCity,
        anonymous: req.body.anonymous,
      };
      return await Users.update(token, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getDetailsById(req, res) {
    const userDetail = await this.getUserById(req.params.id);

    const token = {
      userId: userDetail.dataValues.id,
      userName: userDetail.dataValues.name,
      userUserName: userDetail.dataValues.username,
      userEmail: userDetail.dataValues.email,
      userPassword: userDetail.dataValues.password,
      userJob: userDetail.dataValues.profession,
      userCountry: userDetail.dataValues.country,
      userState: userDetail.dataValues.state,
      userCity: userDetail.dataValues.city,
      userCurrentCountry: userDetail.dataValues.currentCountry,
      userCurrentState: userDetail.dataValues.currentState,
      userCurrentCity: userDetail.dataValues.currentCity,
      anonymous: userDetail.dataValues.anonymous,
    };
    return token;
  }

  /* fetch user details from users table based on email */
  async getUserByEmail(email) {
    try {
      return await Users.findOne({ where: { email: email } });
    } catch (error) {}
  }

  async checkEmail(req, res) {
    try {
      const userDetail = await this.getUserByEmail(req.body.email);
      /* condition for email exist or not in users table */
      if (userDetail) {
        return res.send({
          status: "fail",
          fail: {
            errorCode: 400,
            message: "email already exists",
          },
        });
      } else {
        return res.send({
          status: "success",
        });
      }
    } catch (error) {
      throw error;
    }
  }
  async sortUsers(req, res) {
    try {
      let job = req.body.profession;
      let hcountry = req.body.homeCountry;
      let hstate = req.body.homeState;
      let hcity = req.body.homeCity;
      let id = req.body.id;
      if (job) {
        if (hcity) {
          return await Users.findAll({
            where: {
              profession: job,
              city: hcity,
              state: hstate,
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else if (hstate) {
          return await Users.findAll({
            where: {
              profession: job,
              state: hstate,
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else if (hcountry) {
          return await Users.findAll({
            where: {
              profession: job,
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else {
          return await Users.findAll({
            where: {
              profession: job,
              id: { [Op.ne]: req.body.id },
            },
          });
        }
      } else {
        if (hcity) {
          return await Users.findAll({
            where: {
              city: hcity,
              state: hstate,
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else if (hstate) {
          return await Users.findAll({
            where: {
              state: hstate,
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else if (hcountry) {
          return await Users.findAll({
            where: {
              country: hcountry,
              id: { [Op.ne]: req.body.id },
            },
          });
        } else {
          return await Users.findAll({
            where: {
              id: { [Op.ne]: req.body.id },
            },
          });
        }
      }
    } catch (error) {
      throw error;
    }
  }
  /* user login and generate token */
  async login(req, res) {
    try {
      const { email, password } = req.body;

      /* condition for email, password are not null */
      if (!email || !password) {
        return res.send({
          status: "fail",
          fail: {
            errorCode: 400,
            message: "required field is missing",
          },
        });
      }

      const userDetail = await this.getUserByEmail(email);

      /* condition for email exist or not in users table */
      if (!userDetail) {
        return res.send({
          status: "fail",
          fail: {
            errorCode: 400,
            message: "email does not exist",
          },
        });
      }

      /* condition for compare password with users table data */
      if (!Helper.comparePassword(userDetail.dataValues.password, password)) {
        return res.send({
          status: "fail",
          fail: {
            errorCode: 400,
            message: "password is not valid",
          },
        });
      }
      const token = {
        userId: userDetail.dataValues.id,
        userName: userDetail.dataValues.name,
        userEmail: userDetail.dataValues.email,
      };

      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new userService();
