import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "90px",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    "&img": {
      width: "60%",
    },
  },
  aboutus: { padding: "3em" },
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>{" "}
      <div className={classes.aboutus}>
        <Typography variant="h2">About us</Typography>
        <br></br>
        <br></br>

        <Typography variant="h5" align="center">
          Hello there! We proudly present our humble app:
        </Typography>
        <br></br>
        <Typography variant="h4">NoshFeast</Typography>
        <br></br>
        <Typography variant="h5" align="center">
          Merriam Webster defines "Nosh" as to eat a snack.
        </Typography>
        <br></br>
        <Typography variant="h5" align="center">
          We call it a way of life.
        </Typography>
        <br></br>
        <Typography variant="h5" align="center">
          We are avid supporters of eating, snacking and general merri-ment. We
          hope you find what you're looking for, in our app, in life and in
          food.
        </Typography>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant="h6">Sincerely, </Typography>
        <Typography variant="h6">the NoshFeast Team</Typography>
      </div>
    </div>
  );
}

export default Landing;
