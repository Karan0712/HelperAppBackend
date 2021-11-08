module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Name field can not be empty");
            } else {
              return true;
            }
          },
        },
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Email field can not be empty");
            } else {
              return true;
            }
          },
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Password field can not be empty");
            } else {
              return true;
            }
          },
        },
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Profession field can not be empty");
            } else {
              return true;
            }
          },
        },
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Country field can not be empty");
            } else {
              return true;
            }
          },
        },
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      anonymous: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      currentCountry: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: (val) => {
            if (!val) {
              thrownewError("Country field can not be empty");
            } else {
              return true;
            }
          },
        },
      },
      currentState: {
        type: Sequelize.STRING,
      },
      currentCity: {
        type: Sequelize.STRING,
      },
    },
    {
      charset:
        "utf8" /* i add this two ligne here for generate the table with collation  = 'utf8_general_ci' test it and tell me ? */,
      collate: "utf8_general_ci",
    }
  );

  return User;
};
