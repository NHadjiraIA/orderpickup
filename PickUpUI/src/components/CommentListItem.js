import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  typography: {
    // width: '100px',
  },

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
    // backgroundColor: "#e9ebf0",
    backgroundColor: "#58cbcd",

    marginRight: "1.5em",
  },

  postAndPostedComments: {
    flexDirection: "column",
    width: "60%",
  },

  postComment: {
    // backgroundColor: "#e9ebf0",
    backgroundColor: "#58cbcd",
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
//  const [rating, setRating] = useState(0);

// useEffect(()=>
// {
//   function getRating(){
//     axios.get(`http://localhost:3002/api/v1/ratings?userId=${props.userId}&restaurantId=${props.restaurantId}`)
//     .then((res) => {
//       // console.log('fuck@!',res.data);
//       for (const iterator of res.data.Ratings) {
//         if(iterator.userId === props.userId && iterator.restaurantId===props.restaurantId)
//         // console.log('ITERATOR', iterator)
//         setRating(iterator.rating)
//       }
  
//     })
  
//   }
//   getRating();
// })
      

return (
  
  <Paper style={{ padding: "40px 20px",   backgroundColor: "rgb(141 215 216)", marginTop: 100 }}>
    <Grid container wrap="nowrap" spacing={2}>
      {/* <Grid item> */}
      {/* <Avatar alt="Remy Sharp" src={imgLink} /> */}
      {/* </Grid> */}
      <Grid justifyContent="left" item xs zeroMinWidth>
      <Box component="fieldset" mb={-2} borderColor="transparent">
            <Rating name="read-only" value={4} readOnly />
          </Box>
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
