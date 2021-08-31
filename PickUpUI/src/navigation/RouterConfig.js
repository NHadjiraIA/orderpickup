import React from "react";
import { Switch, BrowserRouter ,Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import {dish} from "../pages/Dish"
import {orders} from '../pages/Orders'
import {cart} from '../pages/Cart'
import {dashboard} from '../pages/Vendors/index.js'
import {vendorMenu} from '../pages/Vendors/vendorMenu.js'
import {restaurant} from '../pages/Restaurant'
import { NotFound } from "./NotFound";
import { 
  ROOT, 
  DISH, 
  ORDERS, 
  RESTAURANT,
  CART,
  VENDOR_DASHBOARD,
  VENDOR_MENU,
} from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        List all public routes here
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DISH} component={dish} />
        <Route exact path={RESTAURANT} component={restaurant} />
        <Route exact path={ORDERS} component={orders} />
        <Route exact path={CART} component={cart} />
        <Route exact path={VENDOR_DASHBOARD} component={dashboard} />
        <Route exact path={VENDOR_MENU} component={vendorMenu}/>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RouterConfig;