const Post = require("../models/Post");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log("This is GET request for Posts");
      let posts = await Post.findAll();
      console.log(posts);
      return res.status(200).json(posts);
    case "POST":
      return;
  }
}



