import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // commentPage: {
  //   padding: "10%",
  //   display: "flex",
  //   flexDirection: "row",
  //   marginLeft: "4em",
  //   marginRight: "4em",
  // },

  eachComment: {
    padding: "20px 20px",
    backgroundColor: "rgb(141 215 216)",
    marginTop: 80,
  },
}));

function CommentListItem(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.eachComment}>
      <Grid container wrap="nowrap" spacing={2}>
        {/* <Grid item> */}
        {/* <Avatar alt="Remy Sharp" src={imgLink} /> */}
        {/* </Grid> */}
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{props.username}</h4>
          <br />
          {/* <div className={classes.commentText}> */}
          <Typography align="left">{props.comment} </Typography>
          {/* </div> */}

          <br />
          <p style={{ textAlign: "left", color: "gray" }}>
            {/* posted 1 minute ago */}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CommentListItem;
