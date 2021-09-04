import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    changeQuant: {
      color: "pink",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  },

  // checkoutButton: {
  //   backgroundColor: "black",
  //   color: "white",

  //   "&:hover": {
  //     backgroundColor: "black",
  //   },
  // },
});

//qty = quantity
const Counter = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="minus-item"
        onClick={props.decrement}
        className={classes.changeQuant}
        style={{
          color: "black",
          backgroundColor: "none",
          boxShadow: "none",
          elevation: 0,
        }}
      >
        <RemoveCircleIcon fontSize="large" />
      </IconButton>
      <h2>{props.qty}</h2>
      <IconButton
        aria-label="add-item"
        onClick={props.increment}
        style={{
          color: "black",
          backgroundColor: "none",
          boxShadow: "none",
          elevation: 0,
        }}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
export default Counter;
