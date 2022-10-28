require("dotenv").config({ path: "../../../.env" });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.AWS_PGDATABASE,
  process.env.AWS_PGUSER,
  process.env.AWS_PGPASSWORD,
  {
    host: process.env.AWS_PGHOST,
    dialect: process.env.AWS_DIALECT,
    port: process.env.AWS_PGPORT,
  }
);

sequelize.authenticate().then(() => {
  console.log("Connection established successfully with promise");
});


module.exports = sequelize;
