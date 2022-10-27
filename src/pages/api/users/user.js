const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
      });

      if (!user) {
        res.status(500).json({ message: "User don't exits" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
