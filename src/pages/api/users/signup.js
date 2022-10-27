const User = require("../../../sequelize/models/user");
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { profilepicture, username, password, email } = req.body;

    const hash = await bcrypt.hash(password, 12);

    try {
      const user = await User.create({
        profilepicture,
        username,
        password: hash,
        email,
      });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "User already exists" });
    }
  }
}
