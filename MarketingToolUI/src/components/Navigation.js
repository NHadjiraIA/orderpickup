import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  LOGIN,
  LOGOUT,
  ORDERS,
  MAP,
  MAREKETER,
  ROOT,
  ENDUSER,
} from "../navigation/CONSTANTS";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wholenav: {
    paddingLeft: "3em",
    paddingRight: "1em",
    backgroundColor: "#22577A",
    padding: "1em",
    textDecoration: "none",

    position: "fixed" /* Set the navbar to fixed position */,
    top: "0",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    overflowX: "hidden",
    // color: "red",
  },
  title: { paddingLeft: "0.5em" },
    mapAndOrders: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
  },
  cartAndLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    width: "20%",
    paddingRight: "3em",
  }
}));
export const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
  const location = useLocation();
  //const name = location?.state?.userName;
  const userName = props.userName;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
   

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();
  return (
    <AppBar position="static" className={classes.wholenav}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontWeight: "bold",
            width: "200px",
          }}
        >
          <Link to={ROOT} style={{ textDecoration: "none", color: "white" }}>
            <Typography className={classes.title} variant="h4" noWrap>
             MarketingTool
            </Typography>
          </Link>
        </div>
        <div className={classes.mapAndOrders}>
          <Link to={MAREKETER} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">Marketer </Typography>
          </Link>
          <Link to={ENDUSER} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">End User</Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
