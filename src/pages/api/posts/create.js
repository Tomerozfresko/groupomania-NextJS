import sequelize from "../../../sequelize/database/database";

const Post = require("../../../sequelize/models/post");
const User = require("../../../sequelize/models/user");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { description, photo, date, like, comment, userEmail } = req.body;
    let user = {};
    // find the user who created the post//!! TODO
    // sequelize.sync();

    // User.findOne({
    //   where: { id: "1" },
    // })
    //   .then((user) => {
    //     console.log(user);

    //     user.createPost({
    //       description,
    //       photo,
    //       date,
    //       like,
    //       comment,
    //     });

    //     return res.status(200).json(user);
    //   })
    //   .catch((err) => console.log(err));

    //   .catch((err) => console.log(err));
    // .then((user) => console.log(user))
    // .catch ((error) =>
    //   console.log("User don't exist", error)

    // try {
    //   console.log("this is the found user:", user);
    //   const post = await user.createPost({
    //     description,
    //     photo,
    //     date,
    //     like,
    //     comment,
    //   });

    //   return res.status(200).json(post);
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({ message: "Failed to add post" });
    // }

    //Legacy 1
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
