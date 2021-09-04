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
  const [userName, setUserName]= useState("");
  useEffect(()=>{
    console.log("this is the user in wrapperComp",userName)
  })
  return (
    <div>
      <CartProvider>
        <Route path={"/"} render={() => (!matched ? <Navigation userName={userName}/> : null)} />
        <RouterConfig restaurants={restaurants}  setUserName={setUserName}/>
        <Footer />
      </CartProvider>
    </div>
  );
}
