import { RouterConfig } from "../navigation/RouterConfig";
import { Route, useRouteMatch } from "react-router-dom";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CartProvider from "../context/cart";
import MainListItems from "./Vendors/listItems";

export default function WrapperComponent(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/restaurants")
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {});
  }, []);
  const matched = useRouteMatch("/vendors/");

  return (
    <div>
      <CartProvider>
        <Route path={"/"} render={() => (!matched ? <Navigation /> : null)} />

        <RouterConfig restaurants={restaurants} />
        <Footer />
      </CartProvider>
    </div>
  );
}
