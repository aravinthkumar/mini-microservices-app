import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [postName, setPostName] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      postName,
    });
    setPostName("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Post Name</label>
          <input
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
