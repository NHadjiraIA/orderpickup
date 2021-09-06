import React from "react";
import { Switch, Route } from "react-router-dom";
import { dish } from "../pages/Dish";
import { Orders } from "../pages/Orders";
import { Cart } from "../pages/Cart";
import  { Loginpage }  from "../pages/Login";
import RestaurantPage from "../pages/Restaurant";
import { signup } from "../pages/Signup";
import { landing } from "../pages/Landing";
import { vendorMenu } from "../pages/Vendors/vendorMenu.js";
import { orderList } from "../pages/Vendors/orderList";
import { Mapping } from "../pages/Map";
import { commentList } from "../pages/Vendors/commentList.js";
import { NotFound } from "./NotFound";
import ResponsiveDrawer from "../components/Vendors/VendorHome";
import PaymentPage from '../pages/Payment'
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
  LOGOUT,
} from "./CONSTANTS";
import Logout from "../components/Logout";

export const RouterConfig = (props) => {
  const restaurants = props.restaurants;
  const setUserName = props.setUserName;
  return (
    <Switch>
      List all public routes here
      <Route exact path={VENDOR_COMMENTS} component={commentList} />
      <Route exact path={PAYMENT} component={PaymentPage} />
      <Route exact path={ROOT} component={landing} />
      <Route exact path={MAP}>
        <Mapping restaurants={restaurants}/>
      </Route>
      <Route exact path={DISH} component={dish} />
      <Route exact path={RESTAURANT}>
        <RestaurantPage />
      </Route>
      <Route exact path={ORDERS} component={Orders} />
      <Route exact path={CART}>
        <Cart />
      </Route>
      <Route exact path={LOGIN} >
        <Loginpage setUserName={setUserName} />
      </Route>
      <Route exact path={LOGOUT} >
        <Logout setUserName={setUserName}/>
      </Route>
      <Route exact path={SIGNUP} component={signup} />
      {/* <Route exact path={VENDOR_DASHBOARD} component={dashboard} /> */}
      <Route exact path={VENDOR_DASHBOARD}>
        <ResponsiveDrawer  />
      </Route>
      <Route exact path={VENDOR_MENU} >
        <vendorMenu  setUserName={setUserName}/>
        </Route >
      <Route exact path={VENDOR_ORDERS} component={orderList} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
