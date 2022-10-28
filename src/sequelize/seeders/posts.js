const Post = require("../models/post");

Post.bulkCreate([
  {
    description: "Love For All, Hatred For None.",
    photo: "https://picsum.photos/800",
    date: "15 mins ago",
    like: 50,
    comment: 19,
    userId: 1,
  },
  {
    description: "Every moment is a fresh beginning.",
    photo: "https://picsum.photos/801",
    date: "50 mins ago",
    like: 5,
    comment: 19,
    userId: 1,
  },
  {
    description: "There was an erraticism with their prosperity rate.",
    photo: "https://picsum.photos/802",
    date: "10 mins ago",
    like: 5,
    comment: 19,
    userId: 1,
  },
  {
    description: "They are widely known around the planet.",
    photo: "https://picsum.photos/803",
    date: "5 days ago",
    like: 5,
    comment: 19,
    userId: 1,
  },
  {
    description: "He is quite skillful at playing basketball.",
    photo: "https://picsum.photos/804",
    date: "19 mins ago",
    like: 5,
    comment: 19,
    userId: 1,
  },
]);
