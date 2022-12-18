import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPost = Object.values(posts).map((post) => {
    console.log(post.postId);
    return (
      <div
        className="card"
        style={{ width: "30%", marginBotton: "20x" }}
        key={post.postId}
      >
        <div className="card-body">
          <h3> {post.postName}</h3>
          <CommentCreate postId={post.postId} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPost}
    </div>
  );
};

export default PostList;
