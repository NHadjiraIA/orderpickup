import React from "react";
import useStyles from './CommentListItemStyle'
import { Grid, Paper, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

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
            <Typography className={classes.typography}>
              {props.comment}
              {" "}
            </Typography>
          {/* </div> */}

          <br />
          <p style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </p>
        </Grid>
      </Grid>
    </Paper>
    
    
    
  );
}


export default CommentListItem;
