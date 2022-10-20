const Sequelize = require("sequelize");
const db = require("../db/config/database");

const User = db.define(
  "users",
  {
    //   id: {
    //     type: Sequelize.STRING,
    //   },
    profilepicture: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
