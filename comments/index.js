const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = Math.random();
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ commentId: commentId, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(commentsByPostId[req.params.id]);
});

app.listen(4001, () => {
  console.log("Listening in port 4001");
});
