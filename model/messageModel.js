module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define(
    "messages",
    {
      user_one: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_two: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      messages: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  return Message;
};
