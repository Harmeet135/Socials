import React, { useContext, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux'
import { Gloabaldata } from "../../App";
import "./form.css"
import { createPost } from "../../redux/api";

const Form = () => {

  const { Userr } = useContext(Gloabaldata);
  const [error, setError] = useState("");

  const [postData, setpostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postData.creator || !postData.title || !postData.message || !postData.tags || !postData.selectedFile) {
      setError("Please fill in all the fields");
      return;
    }

    dispatch(createPost(postData))
    clear();
  };

  const clear = () => {
    setpostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setError("");
  };

  return (
    <>
      {Userr ? (
        <div id="form-container">
            {error && <div className="error-message">{error}</div>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 id="create-memory">Create a Memory</h1>
            <div id="form-input">
              <input className="form-input"
                type="text"
                placeholder="Creator"
                value={postData.creator}
                onChange={(e) =>
                  setpostData({ ...postData, creator: e.target.value })
                }
              />
              <input className="form-input"
                type="text"
                placeholder="title"
                value={postData.title}
                onChange={(e) => setpostData({ ...postData, title: e.target.value })}
              />
              <input className="form-input"
                type="text"
                placeholder="message"
                value={postData.message}
                onChange={(e) => setpostData({ ...postData, message: e.target.value })}
              />
              <input className="form-input"
                type="text"
                placeholder="tags"
                value={postData.tags}
                onChange={(e) => setpostData({ ...postData, tags: e.target.value })}
              />
            </div>

            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setpostData({ ...postData, selectedFile: base64 })
              }
            />

            <div id="form-button">
              <button className="form-button">Submit</button>
            </div>
          </form>
          <div id="form-button">
            <button className="clear" onClick={clear}>Clear</button>
          </div>
        </div>
      ) : (
        <h1 id="form-before">Please Sign in to create your own memories and like other's memories</h1>
      )}
    </>
  );
};

export default Form;
