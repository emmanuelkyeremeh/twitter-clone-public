import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert variant="outlined" severity="error">
        {error}
      </Alert>
    </div>
  );
};

export default Error;
