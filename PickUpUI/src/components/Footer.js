import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // position: 'fixed',
    // top: '0',
    // width: '100vw',
    // flex: '1',
    // flexGrow: 1,
    backgroundColor: "#22577A",

    height: "90px",
    paddingLeft: "2em",
    paddingRight: "2em",
    color: "white",

    overflowX: "hidden",
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography>NoshFeast</Typography>
      <Typography>NoshFeast &copy; 2021</Typography>
    </footer>
  );
}

export default Footer;
