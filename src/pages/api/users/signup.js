const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: __dirname + "../../../../.env" }); //check if path ok

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received POST request");

    bcrypt.hash(req.body.password, 12).then((hash) => {
      const user = User.create({
        id: Math.floor(1000 + Math.random() * 9000),
        profilepicture: req.body.profilepicture,
        username: req.body.username,
        password: hash,
        email: req.body.email,
      })
        .then((user) => {
          console.log(user.toJSON());
          return res.status(200).json({ message: "User created sucessfully" });
        })
        .catch((err) => {
          return res.status(500).json({ message: "User already exists" });
        });
    });
  }
}

