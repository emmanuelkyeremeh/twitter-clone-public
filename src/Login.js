import React, { useState, useEffect } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "./actions/UserActions";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";
import Error from "./Error";

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

const Login = (props) => {
  const classes = useStyles();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userData, loading, error } = userSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, email, password));
  };
  useEffect(() => {
    if (userData) {
      props.history.push(redirect);
    }
  }, [userData, props.history, redirect]);
  return (
    <div className="login-container">
      <div className="header-logo">
        <TwitterIcon style={{ fontSize: "60px" }} />
      </div>
      <div className="header-text">
        <h1>Login to Twitter</h1>
      </div>
      <form className="login-form" onSubmit={submitHandler}>
        {loading ? <Loading /> : error ? <Error error={error} /> : null}
        <br />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder=""
          variant="outlined"
        />{" "}
        <br />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder=""
          variant="outlined"
        />{" "}
        <br />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder=""
          variant="outlined"
        />
        <button className="signup-button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
