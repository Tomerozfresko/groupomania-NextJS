const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const User = require("./user");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  like: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  comment: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

console.log("Post Defined");

module.exports = Post;
