import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    bottom: "0",
    // width: "100vw",
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
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <Typography>NoshFeast &copy; 2021</Typography>
    </footer>
  );
}

export default Footer;
