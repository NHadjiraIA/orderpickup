import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  main:{
    height: '100vh',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    backgroundColor: 'white',
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  heroText: {
    height:'90vh',
    // backgroundColor: '#3f51b5',
    // color: 'white',
  },
}));

export default function LandingPageItems(props) {
  const classes = useStyles();

  return (
    // <React.Fragment>
      <main style={{height: '100%', flexGrow: 1, }}>
        {/* Hero unit */}
        <div 
        className={classes.heroContent} 
        style={{backgroundColor:"transparent", position:"relative"}}>
          <Container maxWidth="sm">
            <div >
              <Typography className={classes.heroText} component="h1" variant="h2" align="center" gutterBottom>
                <span style={{backgroundColor: 'white'}}>Find food near you!</span>
              </Typography>
            </div>
            {/* <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Enter your address" variant="outlined" />
            </form> */}
            <br></br>
            {/* <Button variant="contained" color="primary">
              Search
            </Button> */}
          </Container>
          {props.children}
        </div>
        
      </main>
    // </React.Fragment>
  );
}