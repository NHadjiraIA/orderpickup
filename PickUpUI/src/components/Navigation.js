import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import MoreIcon from "@material-ui/icons/MoreVert";
import {
  LOGIN,
  LOGOUT,
  ORDERS,
  CART,
  MAP,
  ROOT,
} from "../navigation/CONSTANTS";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
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
    color: "red",
  },
  // grow: {
  //   flexGrow: 1,
  //   // width: '100%',
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   display: "none",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "block",
  //   },
  //   flex: "1",
  //   // marginLeft: '0.5em',
  //   color: "white",
  //   textDecoration: "none",
  //   paddingTop: "1em",
  // },
  // inputRoot: {
  //   color: "inherit",
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: "20ch",
  //   },
  // },
  // sectionDesktop: {
  //   display: "none",
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex",
  //     flex: "1",
  //     justifyContent: "space-evenly",
  //     alignItems: "center",
  //   },
  //   "& a": {
  //     color: "inherit",
  //     textDecoration: "none",
  //   },
  //   "&:hover": {
  //     backgroundColor: "transparent",
  //   },
  // },
  // sectionMobile: {
  //   display: "flex",
  //   [theme.breakpoints.up("md")]: {
  //     display: "none",
  //   },
  // },
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
    width: "15%",
    paddingRight: "4em",
  },
  // links: {
  //   flex: "1",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   "& a": {
  //     color: "inherit",
  //     textDecoration: "none",
  //     paddingTop: "1em",
  //   },
  // },
}));
export const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const cart = useCart();
  const location = useLocation();
  const name = location?.state?.userName;
  const userName = props.userName;
  const cartArray = Object.values(cart.cart);
  const cartQuantity = cartArray.map((objectInArray) => {
    return objectInArray.quantity;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const cartQuantitySum = cartQuantity.reduce(reducer, 0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
    <AppBar position="static" className={classes.wholenav}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        <Link to={ROOT} style={{ textDecoration: "none", color: "white" }}>
          <Typography className={classes.title} variant="h4" noWrap>
            NoshFeast
          </Typography>
        </Link>
        <div className={classes.mapAndOrders}>
          <Link to={MAP} style={{ textDecoration: "none", color: "white" }}>
            <Typography>Find Restaurants</Typography>
          </Link>
          <Link to={ORDERS} style={{ textDecoration: "none", color: "white" }}>
            <Typography>Orders</Typography>
          </Link>
        </div>
        <div className={classes.cartAndLogin}>
          <IconButton color="inherit">
            <Badge badgeContent={cartQuantitySum} color="secondary">
              <Link
                to={CART}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ShoppingCart />
              </Link>
            </Badge>
          </IconButton>
          {userName ? (
            <div>
              <label> welcome {userName} </label>
              <Link
                to={ROOT}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography>LogOut</Typography>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to={LOGIN}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography>LogIn</Typography>
              </Link>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
