import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  commentPage: {
    padding: "10%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "4em",
    marginRight: "4em",
  },

  filters: {
    width: "40%",
    height: "30%",
    backgroundColor: "#e9ebf0",
    marginRight: "1.5em",
  },

  postAndPostedComments: {
    flexDirection: "column",
    width: "60%",
  },

  postComment: {
    backgroundColor: "#e9ebf0",
    padding: "1em",
  },

  commentForm: {
    display: "flex",
    flexDirection: "column",
  },
  commentText: {
    display: "flex",
    flexWrap: "wrap",
  },

  postButton: {
    marginTop: "1em",
    backgroundColor: "black",
    color: "white",
    width: "20%",
  },
}));

function CommentListItem(props) {
  const classes = useStyles();

  return (
    <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
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
