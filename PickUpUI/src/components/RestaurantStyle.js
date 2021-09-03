import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroroot:{
    display: 'flex',
    flexDirection: 'row',

    height: '15em',
    backgroundColor: '#6b78be',

    paddingLeft: '5em',
    paddingRight: '5em',
  },
  restaurantcard: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    '& img': {
      padding: '1em',
    },

  },
  restaurantinfo: {
    paddingLeft: '1em',
    paddingRight: '1em',
    marginTop: '1em',
    marginBottom: '1em',

  },

  tagsAndDistance: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '0.4em',

  },

  tags: {
    width: '70%',
  },

  distance:{
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '0.5em',
  },

  contactinfo: {
    width: '30%',
    paddingLeft: '1em',
    paddingRight: '1em',
    borderLeft: 'black solid 2px',
    marginTop: '1em',
    marginBottom: '1em',
  },

  heroMenu: {
    backgroundColor: 'black',
    color: 'white', 

    display: 'flex',
    
    paddingLeft: '1em',
    paddingRight: '2em',
    '& button': {
      paddingLeft: '2em',
      paddingRight: '2em',
      color: 'white', 

    },
  },

  menu: {
    marginLeft: '10%',
    marginRight: '10%',
  }

 
}));

export default useStyles;