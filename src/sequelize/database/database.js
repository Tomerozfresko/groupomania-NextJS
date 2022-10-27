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

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkConnection();

module.exports = sequelize;
