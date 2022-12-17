const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const posts = { postId: 123, postName: "My first post" };

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const { postName } = req.body;
  postId = Math.random();
  posts[postId] = { postId, postName };
  res.status(201).send(posts[postId]);
});

app.listen(4000, () => {
  console.log("Listening in port 4000");
});
