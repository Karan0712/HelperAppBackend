module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "posts",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      charset:
        "utf8" /* i add this two ligne here for generate the table with collation  = 'utf8_general_ci' test it and tell me ? */,
      collate: "utf8_general_ci",
    }
  );

  return Post;
};
