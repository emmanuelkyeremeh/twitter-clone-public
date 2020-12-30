import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import profileimg from "./images/twitter user.png";
import { useSelector, useDispatch } from "react-redux";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { signout } from "./actions/UserActions";
import ModalComponent from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const IconStyle = {
    color: "white",
    fontSize: "30px",
  };
  const [appear, setAppear] = useState(false);

  const OpentheModal = () => {
    setAppear(true);
  };
  const ClosetheModal = () => {
    setAppear(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const SignoutHandler = (e) => {
    dispatch(signout());
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userData } = userSignin;

  return (
    <div className="sidebar-container">
      <Link to="/">
        <IconButton>
          <TwitterIcon className="sidebar-icon" style={IconStyle} />
        </IconButton>
      </Link>
      <div className="sidebar-group">
        <HomeOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Home</p>
      </div>
      <div className="sidebar-group">
        <DialpadOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Explore</p>
      </div>{" "}
      <div className="sidebar-group">
        <NotificationsOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Notifications</p>
      </div>{" "}
      <div className="sidebar-group">
        <MailOutlineOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Messages</p>
      </div>{" "}
      <div className="sidebar-group">
        <BookmarkBorderOutlinedIcon
          className="sidebar-icon"
          style={IconStyle}
        />{" "}
        <p>Bookmarks</p>
      </div>{" "}
      <div className="sidebar-group">
        <ListAltOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Lists</p>
      </div>{" "}
      <div className="sidebar-group">
        <PersonOutlinedIcon className="sidebar-icon" style={IconStyle} />{" "}
        <p>Profile</p>
      </div>{" "}
      <div className="sidebar-group">
        <MoreHorizIcon className="sidebar-icon" style={IconStyle} /> <p>More</p>
      </div>
      <button onClick={OpentheModal} className="sidebar-button">
        <p className="sidebar-button-text">Tweet</p>{" "}
        <CreateIcon className="create-icon" />
      </button>
      <div className="sidebar-group" style={{ marginTop: "2rem" }}>
        <Avatar src={profileimg} />{" "}
        <p className="sidebar-userinfo">
          <span className="sidebar-userinfo-span">
            {userData.name && userData.name}
          </span>{" "}
          <br /> @{userData.username && userData.username}{" "}
        </p>
        <MoreHorizOutlinedIcon
          className="logout-icon"
          onClick={handleClick("top-end")}
          style={{ marginLeft: "10%" }}
        />
      </div>
      <div className={classes.root}>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography>
                  <div>
                    <p onClick={SignoutHandler}>
                      <Link className="logout" to="/signin">
                        logout {userData.username}
                      </Link>
                    </p>
                  </div>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
      <ModalComponent visible={appear} CloseModal={ClosetheModal} />
    </div>
  );
};

export default Sidebar;
