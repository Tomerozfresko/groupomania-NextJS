const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: __dirname + "../../../../.env" }); //check if path ok

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received POST request");
    const user = User.findOne({
      where: { email: req.body.email },
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: "User not found!" });
        }
        console.log(user.password);
        console.log(req.body.password);
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            console.log("this is the result status:" + result);
            if (!result) {
              console.log("wrong password");
              return res.status(401).json({ error: "Incorrect password" });
            }
            const token = jwt.sign(
              { userId: user.email }, //serielize user email
              `${process.env.saltString}`,
              {
                expiresIn: "300m",
              }
            );
            console.log("here is your token:" + token);
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
