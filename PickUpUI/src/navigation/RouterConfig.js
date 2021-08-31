import React from "react";
import { Switch, BrowserRouter ,Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import {dish} from "../pages/Dish"
import {orders} from '../pages/Orders'
import {cart} from '../pages/Cart'
import {login} from '../pages/Login'
import {restaurant} from '../pages/Restaurant'
import {signup} from '../pages/Signup'
import { NotFound } from "./NotFound";
import { 
  ROOT, 
  DISH, 
  COMMENTS, 
  ORDERS, 
  RESTAURANT,
  CART,
  LOGIN,
  SIGNUP
} from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        List all public routes here
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DISH} component={dish}/>
        <Route exact path={COMMENTS}/>
        <Route exact path={RESTAURANT} component={restaurant} />
        <Route exact path={ORDERS} component={orders} />
        <Route exact path={CART} component={cart} />
        <Route exact path={LOGIN} component={login} />
        <Route exact path={SIGNUP} component={signup} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RouterConfig;