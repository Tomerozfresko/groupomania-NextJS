const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:eWswhGDlHkYjtECSHRT8@containers-us-west-76.railway.app:7902/railway"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
