const Post = require("../../../sequelize/models/post");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const posts = await Post.findAll();
      return res.status(200).json(posts);
    default:
      return;
  }
}
