import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wholenav:{
    // backgroundColor: 'red !important',
    paddingLeft: '3em',
    paddingRight: '1em',
  },
  toolbar: {
    width: '100%', 
    display: 'flex', 
    justifyContent: 'space-between',
    overflowX: 'hidden',
  },
  grow: {
    flexGrow: 1,
    // width: '100%', 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    flex:'1',
    // marginLeft: '0.5em',

  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex:'1',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },

    '& a':{
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  links: {
    flex:'1', 
    display: 'flex',
    justifyContent: 'space-between',
    '& a':{
      color: 'inherit',
      textDecoration: 'none',
      paddingTop: '1em',
    },
  },

}));

export default useStyles;