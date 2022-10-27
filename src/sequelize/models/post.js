const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Post = sequelize.define("posts", {
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
  userId: {
    type: Sequelize.INTEGER,
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
});

module.exports = Post;
