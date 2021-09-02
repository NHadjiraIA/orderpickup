import React from "react";
import ParticlesBg from "particles-bg";
import LandingPageItems from "./LandingPageItems";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    height: '100vh',
  },
}));

function Landing() {
  const classes = useStyles();

  return (
    <LandingPageItems>
      <ParticlesBg className={classes.root} type="random" bg={true}/>
    </LandingPageItems>
  );
  
}

export default Landing;

