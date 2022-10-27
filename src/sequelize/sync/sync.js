// sync all Models
const sequelize = require("../database/database");
const User = require("../models/user"); //it will not work without calling it
const Post = require("../models/post"); //it will not work without calling it

//Associations declerations
User.hasMany(Post);
Post.belongsTo(User); // created automaticly Userid foreign key in posts table

sequelize
  .sync({ force: true })
  //   .sync()
  .then((result) => console.log("Tables synced successfully"))
  .catch((error) => console.log(error));
