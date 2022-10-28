const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  profilepicture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
  },
  online: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

console.log("User Defined");

module.exports = User;
