const Sequelize = require("sequelize");
const db = require("../config/database");

const Post = db.define(
  "posts",
  {
    desc: {
      type: Sequelize.STRING,
    },
    photo: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
    userid: {
      type: Sequelize.STRING,
    },
    like: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Post;
