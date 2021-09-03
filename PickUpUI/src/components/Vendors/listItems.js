// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/listItems.js
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import { Link } from "react-router-dom";
import {
  VENDOR_MENU,
  VENDOR_COMMENTS,
  VENDOR_ORDERS,
  VENDOR_DASHBOARD,
} from "../../navigation/CONSTANTS";
import useStyles from "../NavigationStyle.js";

const MainListItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to={VENDOR_DASHBOARD}>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link to={VENDOR_ORDERS}>
          <ListItemText primary="Orders" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Link to={VENDOR_COMMENTS}>
          <ListItemText primary="Comments" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link to={VENDOR_MENU}>
          <ListItemText primary="Menu" />
        </Link>
      </ListItem>
    </div>
  );
};

export default MainListItems;
