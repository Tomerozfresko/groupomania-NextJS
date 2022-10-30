const Post = require("../../../sequelize/models/post");

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { description, photo, date, like, comment, userId } = req.body;
    try {
      const post = {
        description,
        photo,
        date,
        like,
        comment,
        userId,
      };
      await Post.create(post);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ messaage: "creating post failed" });
    }
  }
}
