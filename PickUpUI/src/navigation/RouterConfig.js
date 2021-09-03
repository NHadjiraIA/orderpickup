import React, { useState, useReducer } from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import { dish } from "../pages/Dish";
import { Orders } from "../pages/Orders";
import { Cart } from "../pages/Cart";
import { login } from "../pages/Login";
import RestaurantPage from "../pages/Restaurant";
import { signup } from "../pages/Signup";
import { landing } from "../pages/Landing";
import { dashboard } from "../pages/Vendors/index.js";
import { vendorMenu } from "../pages/Vendors/vendorMenu.js";
import { payement } from "../pages/Payment";
import { orderList } from "../pages/Vendors/orderList";
import { Mapping } from "../pages/Map";
import { commentList } from "../pages/Vendors/commentList.js";
import { NotFound } from "./NotFound";
import {
  ROOT,
  MAP,
  DISH,
  ORDERS,
  RESTAURANT,
  CART,
  LOGIN,
  SIGNUP,
  VENDOR_DASHBOARD,
  VENDOR_MENU,
  VENDOR_COMMENTS,
  PAYMENT,
  VENDOR_ORDERS,
} from "./CONSTANTS";

export const RouterConfig = (props) => {
  console.log("Routerrrrrr", props);
  const restaurants = props.restaurants;
  return (
    <Switch>
      List all public routes here
      <Route exact path={VENDOR_COMMENTS} component={commentList} />
      <Route exact path={PAYMENT} component={payement} />
      <Route exact path={ROOT} component={landing} />
      <Route exact path={MAP}>
        <Mapping restaurants={restaurants} />
      </Route>
      <Route exact path={DISH} component={dish} />
      <Route exact path={RESTAURANT}>
        <RestaurantPage />
      </Route>
      <Route exact path={ORDERS} component={Orders} />
      <Route exact path={CART}>
        <Cart />
      </Route>
      <Route exact path={LOGIN} component={login} />
      <Route exact path={SIGNUP} component={signup} />
      <Route exact path={VENDOR_DASHBOARD} component={dashboard} />
      <Route exact path={VENDOR_MENU} component={vendorMenu} />
      <Route exact path={VENDOR_ORDERS} component={orderList} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
