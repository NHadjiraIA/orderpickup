import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "90px",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    "&img": {
      width: "60%",
    },
  },
  aboutus: { padding: "3em" },
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="https://marketinginsidergroup.com/wp-content/uploads/2019/06/32550327_mresize.jpg"></img>{" "}
      <div className={classes.aboutus}>
        <Typography variant="h2">About us</Typography>
        <br></br>
        <br></br>

         
        <br></br>
        <Typography variant="h4">MarketingTool</Typography>
        <br></br>
        <Typography variant="h6" align="center">
        With our banks Vantage, you can unlock rewards, savings, insights and more with any eligible bank account. Only at this bank.
        </Typography>
        <br></br>
        <Typography variant="h6" align="center">
          We call it a way of life.
        </Typography>
        <br></br>
        <Typography variant="h6" align="center">
        Check out our no monthly fee banking solutions and other powerful benefits for eligible client
        If your are marketer click in Marketer.
        if you are user or client click in End User.
        </Typography>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant="h6">Sincerely, </Typography>
        <Typography variant="h6">the MarketingTool Team</Typography>
      </div>
    </div>
  );
}

export default Landing;