import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom: '0.5em',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  orderList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // flex: 1,
    // flexGrow: 1,
  },
  accordion: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  perorder: {
    backgroundColor: '#e9ebf0',
  },
  table: {
    minWidth: 650,
  },

  cartButtons: {
    backgroundColor: 'black',
    color:'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    '&:hover': {
      backgroundColor: 'black',
    },
  }
}));

export default useStyles;