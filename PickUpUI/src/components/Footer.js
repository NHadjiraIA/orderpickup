import { Typography } from '@material-ui/core';
import React from 'react'; 
import useStyles from './FooterStyle.js'

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography>NoshFeast</Typography>
      <Typography>NoshFeast &copy; 2021</Typography>
    </footer>
  )
  
};

export default Footer;
