import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CommentListItem from './CommentListItem.js'
// left this in here in case we want to do proper accounts with avatars
// const imgLink =
// "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const useStyles = makeStyles((theme) => ({

  commentPage: {
    padding: '10%', 
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4em',
    marginRight: '4em',
  },

  filters: {
    width: '40%',
    height: '30%',
    backgroundColor: '#e9ebf0',
    marginRight: '1.5em',
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',

    '& button': {
      backgroundColor: 'black',
      color: 'white',
      marginBottom: '1em',
      '&:hover': {
        backgroundColor: 'black',
      }
    } 

  },

  postAndPostedComments: {
    flexDirection: 'column',
    width: '60%', 

  },

  postComment: {
    backgroundColor: '#e9ebf0',
    padding: '1em',
  },

  commentForm: {
    display: 'flex',
    flexDirection: 'column',
    
  },

  postButton: {
    marginTop: '1em',
    backgroundColor: 'black',
    color: 'white',
    width: '20%',
  }


}));

function CommentList() {
  const classes = useStyles();

  const testCommentData = [
    { 
      id: 1, 
      username: 'RandomUser1',
      comment: "The API documentation of the Typography React component. Learn more about the props and the CSS customization points.", 
    },
    { 
      id: 2, 
      username: 'RandomUser2',
      comment: "The API documentation of the Typography React component. Learn more about the props and the CSS customization points.", 
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
        <Button>Newest to Oldest</Button>
        <Button>Oldest to Newest</Button>
      </div>
      <div>
        {item}
      </div>
      {/* <section className={classes.postAndPostedComments}>
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
      </section> */}
    </div>
    
  );
}


export default CommentList;
