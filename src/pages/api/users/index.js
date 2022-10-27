const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await User.findAll({ raw: true });
    return res.status(200).json(users);
  }
}
