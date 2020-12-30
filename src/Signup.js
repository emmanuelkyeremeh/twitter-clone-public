import React, { useState, useEffect } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./actions/UserActions";
import { Link } from "react-router-dom";
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

const Signup = (props) => {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const [confirmpassword, setconfirmpassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { userData, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, username, email, password));
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
        <h1>Create an account</h1>
      </div>
      <form className="login-form" onSubmit={submitHandler}>
        {loading ? <Loading /> : error ? <Error error={error} /> : null}
        <br />
        <TextField
          className={classes.root}
          error={name.length === 0 || name.length < 5 || name.length > 20}
          id="outlined-basic"
          label="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder=""
          variant="outlined"
          helperText={
            name.length === 0
              ? "*This field is required"
              : name.length < 5
              ? "*Name should be between 5 and 20 words"
              : ""
          }
        />{" "}
        <br />
        <TextField
          className={classes.root}
          id="outlined-basic"
          error={
            username.length === 0 || username.length < 5 || username.length > 20
          }
          label="Username"
          value={username.trim()}
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="Type a nickname"
          variant="outlined"
          helperText={
            name.length === 0
              ? "*This field is required"
              : name.length < 5
              ? "*Username should be between 5 and 20 words"
              : ""
          }
        />{" "}
        <br />
        <TextField
          error={email.length === 0}
          className={classes.root}
          id="outlined-basic"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          label="Email"
          type="email"
          placeholder=""
          variant="outlined"
          helperText={name.length === 0 ? "*This field is required" : ""}
        />{" "}
        <br />
        <TextField
          error={password.length === 0 || password.length < 8}
          className={classes.root}
          id="outlined-basic"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          label="password"
          type="password"
          placeholder=""
          variant="outlined"
          helperText={
            password.length === 0
              ? "*This field is required"
              : password.length < 8
              ? "*Password must be not less than 8 characters"
              : ""
          }
        />{" "}
        <br />
        <TextField
          error={confirmpassword.length === 0 || confirmpassword !== password}
          className={classes.root}
          id="outlined-basic"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
          label="confirm password"
          type="password"
          placeholder=""
          variant="outlined"
          helperText={
            confirmpassword.length === 0
              ? "*This field is required"
              : confirmpassword !== password
              ? "*Passwords do not match"
              : ""
          }
        />
        <button className="signup-button" type="submit">
          Continue
        </button>
        <p>
          Already have an account?{" "}
          <Link className="link" to="/login">
            Log In
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
