import { Avatar } from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useDispatch, useSelector } from "react-redux";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import dummyimg from "./images/twitter user.png";
import React, { useEffect } from "react";
import PostBody from "./PostBody";
import { getPosts } from "./actions/PostActions";
import Loading from "./Loading";
import Error from "./Error";

const Posts = () => {
  const styles = {
    color: "#1da1f2",
    marginLeft: "2px",
  };

  const dispatch = useDispatch();

  const getPost = useSelector((state) => state.getPosts);
  const { loading, error, posts } = getPost;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts-container">
      <div className="posts-title">
        <p>Home</p>
      </div>
      <div className="post-compose">
        <div className="post-compose-header">
          <Avatar src={dummyimg} />
          <input type="text" placeholder="What's Happening?" />
        </div>
        <div className="post-compose-body">
          <div className="post-compose-body-icons">
            <ImageOutlinedIcon style={styles} />
            <GifOutlinedIcon style={styles} />
            <EqualizerOutlinedIcon style={styles} />
            <EmojiEmotionsOutlinedIcon style={styles} />
            <EventOutlinedIcon style={styles} />
          </div>
          <div className="post-compose-button">
            <button disabled="disabled">Tweet</button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {posts &&
        posts
          .reverse()
          .map((post) => (
            <PostBody
              key={post._id}
              name={post.name}
              username={post.username}
              caption={post.caption}
              image={post.image}
              createdAt={post.createdAt}
            />
          ))}
    </div>
  );
};

export default Posts;
