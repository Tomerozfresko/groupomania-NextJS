import sequelize from "../../../sequelize/database/database";

const Post = require("../../../sequelize/models/post");
const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { photo, userId, date, like, comment } = req.body;
    console.log(photo, userId);
    try {
      const user = await User.findOne({
        where: { id: userId },
      });
      console.log(user);

      if (!user) {
        res.status(500).json({ message: "User don't exits" });
      }

      const postData = {
        profilepicture: user.profilepicture,
        username: user.username,
        date: date,
        img: photo,
        like: like,
        comments: comment,
      };
      console.log("the post data:", postData);

      return res.status(200).json(postData);
    } catch (error) {
      console.log(error);
    }
  }
}
