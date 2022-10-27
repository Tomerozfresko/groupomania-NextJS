// const Post = require("../../../sequelize/models/post");
const User = require("../models/user");

User.bulkCreate([
  {
    profilepicture: "https://joeschmoe.io/api/v1/joe",
    username: "Tomer Oz Fresko (admin)",
    password: "1234",
    email: "test@test.com",
    online: false,
    admin: true,
  },
  {
    profilepicture: "https://joeschmoe.io/api/v1/jane",
    username: "Elisabeth Damjan",
    password: "1234",
    email: "test1@test.com",
    online: true,
    admin: false,
  },
  {
    profilepicture: "https://joeschmoe.io/api/v1/jia",
    username: "Franco Tria",
    password: "1234",
    email: "test2@test.com",
    online: true,
    admin: false,
  },
  {
    profilepicture: "https://joeschmoe.io/api/v1/jeane",
    username: "Test",
    password: "1234",
    email: "test3@test.com",
    online: true,
    admin: false,
  },
  {
    profilepicture: "https://joeschmoe.io/api/v1/jude",
    username: "Not Online User",
    password: "1234",
    email: "test4@test.com",
    online: false,
    admin: false,
  },
]);
