import React, { useState, useEffect } from "react";
import useStyles from "./CommentListStyle";
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

// left this in here in case we want to do proper accounts with avatars
// const imgLink =
// "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment() {
  const location = useLocation();

  let userId = location?.state?.userId;
  let restaurantId = location?.state?.restaurantId;

  const classes = useStyles();

  const [value, setValue] = useState(2);
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState("");
  const [commentsListData, setCommentsListData] = useState([]);

  //TODO: remove the sample data that was used for test
  userId = 1;
  restaurantId = 1;
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
