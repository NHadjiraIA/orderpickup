import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import { LOGIN,LOGOUT, ORDERS, CART, MAP, ROOT } from "../navigation/CONSTANTS";
import { Link } from "react-router-dom";
import useStyles from "./NavigationStyle.js";
import { useCart } from "../context/cart";
import { useHistory, useLocation } from "react-router-dom";


export const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const cart = useCart();
  const userName = props.userName;
  const cartArray = Object.values(cart.cart);
  const cartQuantity = cartArray.map((objectInArray) => {
    return objectInArray.quantity;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const cartQuantitySum = cartQuantity.reduce(reducer, 0);
  const history = useHistory();
   

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const goToLogOut = (path) => {
    
    history.push({
      pathname: ROOT,
      // state: { 
      //   userId: userInfo?.id,
      //   userName: userInfo?.name,
      //   phoneNumber: userInfo?.phone
      // }
    });
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.wholenav}>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Link to={ROOT}>
            <Typography className={classes.title} variant="h6" noWrap>
              NoshFeast
            </Typography>
          </Link>
          <Typography className={classes.links}>
            <Link to={MAP}>
              <Typography>Find Restaurants</Typography>
            </Link>
            <Link to={ORDERS}>
              <Typography>Orders</Typography>
               
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={cartQuantitySum} color="secondary">
                <Link to={CART}>
                  <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
               { userName ? 
                 <div>
                  <label> welcome {userName} ß
                  </label> 
                  <Link to={LOGOUT}>
                    <Typography>LogOut</Typography>
                  </Link>
                 </div>: 
                 <div>
                <Link to={LOGIN}>
                  <Typography>LogIn</Typography>
                </Link>
              </div>
               }
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
};

