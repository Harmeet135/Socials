import React from "react";
import "./posts.css";
import Post from "./post/Post.js";
import { useSelector } from "react-redux";

const Posts = ({ setcurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts.length ? <h1 id="before">Nothing to Display</h1> : (
      <div id="whole-post">
        {
          posts.map((post) => (
            <Post post={post} setcurrentId={setcurrentId} />
          ))
        }
      </div>
    )
  );
};

export default Posts;
