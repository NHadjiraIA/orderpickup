import React from "react";
import useStyles from './CommentListStyle'
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import CommentListItem from './CommentListItem.js'
// left this in here in case we want to do proper accounts with avatars
// const imgLink =
  // "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment() {
  const classes = useStyles();

  const testCommentData = [
    { 
      id: 1, 
      username: 'RandomUser1',
      comment: "asdifaw;ejfa;lksjdfl;kasjfl;kawjef;lkajfdkl;ajwelkfjasdfawef", 
    },
    { 
      id: 2, 
      username: 'RandomUser2',
      comment: "awefa;siojdf;alwj;lakjdfl;ksjdfkl;ajwe;fjasl;kdfjl;kadngakvnal;skdfl;awjfl;wjflk;jk;j", 
    },
  ];

  const item = testCommentData.map((item) => {
    return (
      <CommentListItem 
        key={item.id} 
        comment={item.comment} 
        username={item.username}
      />
    );
  });

  return (
    <div className={classes.commentPage}>
      
      <div className={classes.filters}>
        <h3>Filters</h3>
        <h3>Ratings</h3>
        <h3>Newest</h3>
        <h3>Oldest</h3>

      </div>
      
      <section className={classes.postAndPostedComments}>
        <div className={classes.postComment}>
          <h2>Post a Review</h2>
          <h3>Rating</h3>
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          <h3>Comment</h3>
          <form className={classes.commentForm} noValidate autoComplete="off">
            <TextField id="standard-basic" label="How was your experience?" />
            <br />
            <Button variant="contained" size='medium' className={classes.postButton}>
              Post
            </Button>
          </form>
        </div>
        <section className={classes.postedComments}>
          {item}
        </section >
      </section>
    </div>
    
  );
}


export default Comment;
