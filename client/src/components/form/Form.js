import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux'
import { createPost } from "../../actions/posts";
import "./form.css"

const Form = () => {

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
  };

  return (
    <div id="form-container">
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
          <button className="form-button" onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
