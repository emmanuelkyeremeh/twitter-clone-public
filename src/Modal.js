import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "./actions/PostActions";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { IconButton, makeStyles } from "@material-ui/core";
import Modal from "react-awesome-modal";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1da1f2",
    },
    "& .MuiInputLabel-outlined": {
      color: "#1da1f2",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
  },
});

const ModalComponent = ({ visible, CloseModal }) => {
  const classes = useStyles();

  const [caption, setcaption] = useState("");
  const [photo, setPhoto] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userData } = userSignin;

  const [username] = useState(userData.username);
  const [name] = useState(userData.name);

  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(photo);
    dispatch(post(name, username, caption, photo));
    window.location = "/";
  };
  return (
    <Modal
      visible={visible}
      width="230"
      className="simple-modal"
      height="400"
      effect="fadeInUp"
      onClickAway={CloseModal}
    >
      <div className="modal">
        <a
          href="javascript:void(0);"
          className="modal-close"
          onClick={CloseModal}
        >
          <IconButton>
            <CancelOutlinedIcon style={{ color: "white" }} />
          </IconButton>
        </a>
        <form
          className="modal-form"
          enctype="multipart/form-data"
          onSubmit={SubmitHandler}
        >
          <div className="post-header">
            <h1 className="post-title">Create a Post</h1>
          </div>
          <TextField
            value={caption}
            onChange={(e) => setcaption(e.target.value)}
            className={classes.root}
            label="Type Something"
            multiline
            rows={4}
            variant="outlined"
          />
          <div className="image-upload">
            <p>Upload an image</p>
            <br />
            <input
              type="file"
              name="file"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="file-input"
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <br />

          <button type="submit" className="sidebar-button">
            Post
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalComponent;
