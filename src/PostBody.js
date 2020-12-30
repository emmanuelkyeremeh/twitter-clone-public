import React from "react";
import Avatar from "@material-ui/core/Avatar";
import twitterUser from "./images/twitter user.png";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

const PostBody = ({ name, username, caption, photo, createdAt }) => {
  const optionalStyle = {
    display: "none",
  };
  return (
    <div className="post-body-container">
      <div className="post-body-header">
        <Avatar src={twitterUser} />{" "}
        <p>
          {name}
          <span className="username"> @{username}</span>{" "}
          <span className="timestamp">{createdAt.substr(0, 10)}</span>
        </p>
      </div>

      <p className="post-caption">{caption}</p>
      <div className="post-img">
        {photo ? (
          <img src={photo} alt="" />
        ) : photo === "" ? (
          <img src={photo} style={optionalStyle} alt="" />
        ) : null}
      </div>
      <div className="posts-stats">
        <div className="stats-blue">
          <ChatBubbleOutlineOutlinedIcon />
        </div>
        <div className="stats-green">
          <AutorenewOutlinedIcon />
        </div>
        <div className="stats-red">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
