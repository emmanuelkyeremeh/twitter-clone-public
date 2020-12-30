import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import GroupIcon from "@material-ui/icons/Group";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const Signin = () => {
  const styles = {
    fontSize: "80px",
  };

  return (
    <div className="signin">
      <div className="logo">
        <div className="logo-body">
          <SearchIcon styles={styles} /> <p>Follow your interests</p>
        </div>{" "}
        <div className="logo-body">
          <GroupIcon styles={styles} />{" "}
          <p>Hear what people are talking about</p>
        </div>{" "}
        <div className="logo-body">
          <ChatBubbleOutlineRoundedIcon styles={styles} />{" "}
          <p>Join the conversation</p>
        </div>
      </div>
      <div className="signin-actions">
        <div className="actions-header">
          <TwitterIcon style={{ fontSize: "70px" }} />
          <h1>See what's happening in the world right now</h1>
        </div>
        <div className="actions-body">
          <p>Join Twitter today</p>
          <Link to="/signup">
            {" "}
            <button className="signup-button">Sign up</button>
          </Link>
          <Link to="/login">
            {" "}
            <button className="login-button">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
