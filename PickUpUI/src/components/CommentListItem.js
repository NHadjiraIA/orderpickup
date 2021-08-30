import React from "react";
import useStyles from './CommentListItemStyle'
import { Grid, Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

// left this in here in case we want to do proper accounts with avatars
// const imgLink =
  // "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

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
          <p style={{ textAlign: "left" }}>
            {props.comment}
            {" "}
          </p>
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
