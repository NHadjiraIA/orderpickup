import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";
import CommentListItem from "./CommentListItem.js";
import { useHistory, useLocation } from "react-router-dom";
import {
  postComment,
  getCommentByRestaurant,
} from "../services/commentService";

import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    flexDirection: "column",
    padding: "1em",

    "& button": {
      backgroundColor: "black",
      color: "white",
      marginBottom: "1em",
      "&:hover": {
        backgroundColor: "black",
      },
    },
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

  postButton: {
    marginTop: "1em",
    backgroundColor: "black",
    color: "white",
    width: "20%",
  },
}));

function Comment(props) {
  const location = useLocation();

  // let userId = location?.state?.userId;
  // let restaurantId = location?.state?.restaurantId;

  let userId= props.userId;
  let restaurantId = props.restaurantId;

  console.log("restauranttttttidddddd", restaurantId);
  const classes = useStyles();

  const [value, setValue] = useState(2);
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState("");
  const [commentsListData, setCommentsListData] = useState([]);

  //TODO: remove the sample data that was used for test
  // userId = 1;
  // restaurantId = 1;
  //END TODO
  const commentTextHandleChange = (event) => {
    setCommentText(event.target.value);
  };

  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        getCommentByRestaurant(restaurantId).then((result) => {
          console.log("inital loading of data", result);
          setCommentsListData(result);
          console.log(commentsListData);
        });
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  }, [setCommentsListData]);

  const postCommentHandler = () => {
    if (!commentText) {
      setErrors("A comment is needed!");
    } else {
      var requestDto = {
        userId: userId,
        restaurantId: restaurantId,
        Comment: commentText,

      };
      postComment(requestDto)
        .then((result) => {
          setCommentText("");
          getCommentByRestaurant(restaurantId).then((result) => {
            setCommentsListData(result);
          });
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 404) {
            setErrors("No comment found!");
          } else {
            if (err.response.status == 400) {
              setErrors("restaurantId is not valid!");
            } else {
              setErrors("Unknow error!");
            }
          }
        });
    }
  };

  return (
    <div className={classes.commentPage}>
      <div className={classes.filters}>
        <h3>Filters</h3>
        <Button>Newest to Oldest</Button>
        <Button>Oldest to Newest</Button>
      </div>

      <section className={classes.postAndPostedComments}>
        <div className={classes.postComment}>
          <h2>Post a Review</h2>
          <h3>Rating</h3>
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <h3>Comment</h3>
          <form className={classes.commentForm} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="How was your experience?"
              onChange={commentTextHandleChange}
              value={commentText}
            />
            <br />
            <Button
              variant="contained"
              size="medium"
              className={classes.postButton}
              onClick={postCommentHandler}
            >
              Post
            </Button>
          </form>
        </div>
        <section className={classes.postedComments}>
          {commentsListData &&
            commentsListData.map((item) => {
              return (
                <CommentListItem
                  key={item.id}
                  comment={item.Comment}
                  username={item.commenter.name}
                  
                />
              );
            })}
        </section>
      </section>
    </div>
  );
}

export default Comment;
