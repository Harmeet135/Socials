import React, { useContext } from "react";
import "./post.css";
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { AiFillLike, AiFillDelete } from 'react-icons/ai';
import { deletePost, likePost } from "../../../actions/posts";
import { Gloabaldata } from "../../../App";


const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { Userr } = useContext(Gloabaldata);

  return (

    <div id="post-info">
      <div id="creator">
        <h5>{post.creator}</h5>
        <p> {moment(post.createdAt).fromNow()}</p>
      </div>
      <div id="post-image">
        <img src={post.selectedFile} />
      </div>

      <div id="about">
        <div id="tags">
          {post.tags.map((tag) => `#${tag}`)}
        </div>

        <div id="title">
          <h1>{post.title}</h1>
        </div>
        <div id="message">
          <h2> {post.message}</h2>
        </div>
        <div id="icons">
          <div id="b1">
            <button disabled={!Userr} onClick={() => dispatch(likePost(post._id))}><AiFillLike /> <p>{post.likeCount} </p></button>
          </div>
          <div id="b2">
            <button disabled={!Userr} onClick={() => dispatch(deletePost(post._id))}><AiFillDelete /><p> Delete</p></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Post;
