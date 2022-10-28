const Post = require("../../../sequelize/models/post");
const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { description, photo, date, like, comment, userEmail } = req.body;
    let user = {};
    try {
      user = await User.findOne({
        where: { email: userEmail },
      });

      if (!user) {
        res.status(500).json({ message: "User don't exits" });
      }

      console.log("here is the user:", user.email);
    } catch (error) {
      console.log("User don't exist", error);
    }

    try {
      const post = await Post.create({
        description,
        photo,
        date,
        like,
        comment,
        userId: user.id,
      });

      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to add post" });
    }
  }
}
