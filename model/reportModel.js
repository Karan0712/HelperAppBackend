
module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define(
    "Report",
    {
      user_reporter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      user_flagged: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true, //optional
      },
      status: {
        type:  Sequelize.INTEGER,
      }
    },
    {
      charset:
        "utf8" /* i add this two ligne here for generate the table with collation  = 'utf8_general_ci' test it and tell me ? */,
      collate: "utf8_general_ci",
    }
  );

  Report.associate = function(models) {
    Report.belongsTo(User, {foreignKey: 'user_reporter', as: 'user'})
    Report.belongsTo(models.user, {foreignKey: 'user_flagged', as: 'user'})
    models.user.hasMany(Report , {foreignKey: 'user_flagged', sourceKey: 'user_flagged'});
    models.user.hasMany(Report , {foreignKey: 'user_reporter', sourceKey: 'user_reporter'});
  };

  return Report;
};
