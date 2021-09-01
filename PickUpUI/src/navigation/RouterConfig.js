import React from "react";
import { Switch, BrowserRouter ,Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import {dish} from "../pages/Dish"
import {orders} from '../pages/Orders'
import {cart} from '../pages/Cart'
import {login} from '../pages/Login'
import {restaurant} from '../pages/Restaurant'
import {signup} from '../pages/Signup'
import {dashboard} from '../pages/Vendors/index.js'
import {vendorMenu} from '../pages/Vendors/vendorMenu.js'
// import {restaurant} from '../pages/Restaurant'
import{Mapping} from '../pages/Map'

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
} from "./CONSTANTS";


const restaurantsList = [
  {
    id: 1,
    name: "Mouselline",
    text: "ghfgtcj,,blknkllllllll",
    open:"Open 11.30 PM - 8.30 PM",
    address: "160 Burger Street",
    img: "https://images.unsplash.com/photo-1543826173-70651703c5a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80",
    position: { lat: 43.886471264237926, lng: -79.27779635908396 },
  },
  {
    id: 2,
    name: "Tony Romas",
    text: "ghijolllllllllll",
    open:"Open 12.00 PM - 8.30 PM",
    address: "45 Beaniee Street",
    img:  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    position: { lat: 43.897442371992796, lng: -79.27875994348136 },
  },
  {
    id: 3,
    name: "Outback",
    text: "ooooooooooofffff",
    open:"Open 11.00 PM - 9.00 PM",
    address: "98 Jump Street",
    img: "https://images.unsplash.com/photo-1625937712159-e305336cbf4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=844&q=80",
    position: { lat: 43.89667763035046, lng: -79.26638230855174 },
  },

  {
    id: 4,
    name: "The Bakery",
    text: "ooooooooooofffff",
    open:"Open 10.00 PM - 8.00 PM",
    address: "420 Jump Street",
    img: "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   ,
    position: { lat: 43.89567763035046, lng: -79.26538230855174 },
  },
];
export const RouterConfig = (props) => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        List all public routes here
        <Route exact path={ROOT} component={Home} />
        <Route exact path={MAP} component={Mapping} />
        <Route exact path={DISH} component={dish} />
        <Route exact path={RESTAURANT} component={restaurant} />
        <Route exact path={ORDERS} component={orders} />
        <Route exact path={CART} component={cart} />
        <Route exact path={LOGIN} component={login} />
        <Route exact path={SIGNUP} component={signup} />
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