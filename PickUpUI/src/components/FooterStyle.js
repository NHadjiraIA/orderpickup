import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root: {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'fixed',
    // top: '0',
    // width: '100vw',
    // flex: '1',
    // flexGrow: 1,

    height: '90px',
    paddingLeft: '2em', 
    paddingRight: '2em',

    backgroundColor: '#3f51b5',
    color: 'white',

    overflowX: 'hidden',
  }

}));

export default useStyles;