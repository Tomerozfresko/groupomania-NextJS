const User = require("../models/User");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      let users = await User.findAll();
      return res.status(200).json(users);
    case "POST":
      return;
  }
}



