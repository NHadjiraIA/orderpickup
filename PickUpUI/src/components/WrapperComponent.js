import { RouterConfig } from "../navigation/RouterConfig";
import { Route, useRouteMatch } from "react-router-dom";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CartProvider from "../context/cart";

export default function WrapperComponent(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/restaurants")
      .then((res) => {
        console.log("Infoooooooooo", res.data);

        setRestaurants(res.data);
      })
      .catch((err) => {});
  }, []);
  console.log("RESTAURANTEESSSS", restaurants);
  const matched = useRouteMatch("/vendors/");

  return (
    <div>
      <CartProvider>
        <Route
          path={"/"}
          render={() => (!matched ? <Navigation /> : <mainListItems />)}
        />

        <RouterConfig restaurants={restaurants} />
        <Footer />
      </CartProvider>
    </div>
  );
}
