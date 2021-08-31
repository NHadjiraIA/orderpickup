import React from "react";
import { Switch, BrowserRouter ,Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import {test} from "../pages/Test"
import {dish} from "../pages/Dish"
import {orders} from '../pages/Orders'
import {cart} from '../pages/Cart'
import {dashboard} from '../pages/Vendors/Dashboard'
import {restaurant} from '../pages/Restaurant'
import { NotFound } from "./NotFound";
import { 
  ROOT, 
  TEST, 
  DISH, 
  COMMENTS, 
  ORDERS, 
  RESTAURANT,
  CART,
  DASHBOARD
} from "./CONSTANTS";


export const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        List all public routes here
        <Route exact path={ROOT} component={Home} />
        <Route exact path={TEST} component={test} />
        <Route exact path={DISH} component={dish}/>
        <Route exact path={COMMENTS}/>
        <Route exact path={RESTAURANT} component={restaurant} />
        <Route exact path={ORDERS} component={orders} />
        <Route exact path={CART} component={cart} />
        <Route exact path={DASHBOARD} component={dashboard} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RouterConfig;