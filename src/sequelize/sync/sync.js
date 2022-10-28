const sequelize = require("../database/database");
const User = require("../models/user");
const Post = require("../models/user");

User.hasMany(Post);
Post.belongsTo(User);

sequelize
  .sync({ alter: true })
  .then((result) => console.log("Tables synced successfully"))
  .catch((error) => console.log(error));
