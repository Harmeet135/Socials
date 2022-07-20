import Posts from "../../components/posts/Posts";
import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import "./home.css";
import Navbar from "../navbar/Navbar";
import Auth from "../auth/Auth";

const Home = (props) => {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();
  console.log(props.User);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div id="app-container">
        <Posts setcurrentId={setcurrentId} />
        <Form currentId={currentId} setcurrentId={setcurrentId} />
      </div>
    </>
  );
};

export default Home;
