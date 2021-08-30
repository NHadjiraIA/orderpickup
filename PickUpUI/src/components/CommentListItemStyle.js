import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;