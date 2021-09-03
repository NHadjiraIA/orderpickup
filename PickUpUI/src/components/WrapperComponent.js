import { RouterConfig } from "../navigation/RouterConfig";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div>
      <Navigation />
      <RouterConfig restaurants={restaurants} />
      <Footer />
    </div>
  );
}
