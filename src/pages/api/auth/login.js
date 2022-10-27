const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: __dirname + "../../../../.env" }); //check if path ok

export default function handler(req, res) {
  if (req.method === "POST") {
    User.findOne({
      where: { email: req.body.username },
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: "User not found!" });
        }
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (!result) {
              console.log("wrong password");
              return res.status(401).json({ error: "Incorrect password" });
            }
            const token = jwt.sign(
              { userId: user.email }, //serielize user email
              `${process.env.saltString}`,
              {
                expiresIn: "30m",
              }
            );
            return res.status(200).json({
              userId: user.email,
              token: token,
            });
          }
        );
      })
      .catch((err) => {
        return res.status(400).json({ message: "Bad request" });
      });
  }
}
