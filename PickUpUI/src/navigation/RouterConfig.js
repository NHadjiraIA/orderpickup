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

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return { ...state, [action.item.id]: action.item };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempState = { ...state };
    delete tempState[action.itemId];
    return tempState;
  }
  if (action.type === "CHANGE_QUANTITY") {
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        quantity: state[action.itemId].quantity + action.step,
      },
    };
  }
  return state;
};

export const RouterConfig = (props) => {
  const [cart, dispatch] = useReducer(reducer, {
    1: {
      id: 1,
      name: "food item 1",
      img_url:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
      description: "askjdfaskjfasdf",
      price: 500,
      calories: 123,
      quantity: 5,
    },
  });
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };
  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", itemId });
  };
  const increaseQuantity = (itemId) => {
    dispatch({ type: "CHANGE_QUANTITY", itemId, step: 1 });
  };
  const decreaseQuantity = (itemId) => {
    dispatch({ type: "CHANGE_QUANTITY", itemId, step: -1 });
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          List all public routes here
          <Route exact path={VENDOR_COMMENTS} component={commentList} />
          <Route exact path={PAYMENT} component={payement} />
          <Route exact path={ROOT} component={landing} />
          <Route exact path={MAP} component={Mapping} />
          <Route exact path={DISH} component={dish} />
          <Route exact path={RESTAURANT}>
            <RestaurantPage cart={cart} addItem={addItem} />
          </Route>
          <Route exact path={ORDERS} component={Orders} />
          <Route exact path={CART}>
            <Cart
              cart={cart}
              removeItem={removeItem}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
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
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
