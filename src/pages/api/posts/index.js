const Post = require("../../../sequelize/models/post");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      let posts = await Post.findAll();
      return res.status(200).json(posts);
    case "POST":
      return;
    default:
      return;
  }
}
