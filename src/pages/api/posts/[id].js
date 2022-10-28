const Post = require("../../../sequelize/models/post");
const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const post = await Post.findOne({
          where: req.query,
          //   include: { model: User },
        });
        // !! make userId dynamicly
        const user = await User.findOne({
          where: { id: post.userId },
          raw: true,
        });

        if (!user) {
          return res.status(500).json({ messsage: "User don't exists" });
        }
        console.log(user);

        if (!post) {
          return res.status(500).json({ messsage: "Post don't exists" });
        }

        return res.status(200).json({
          ...post.dataValues,
          userProfilePicture: user.profilepicture,
          userName: user.username,
        });
      } catch (error) {
        console.log("Error fetching Post", error);
      }
    default:
      return;
  }
}
