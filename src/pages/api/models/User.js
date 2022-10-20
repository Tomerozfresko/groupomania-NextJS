const Sequelize = require("sequelize");
const db = require("../db/config/database");

const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    profilepicture: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
