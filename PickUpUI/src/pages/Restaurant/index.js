import React from "react";
import Restaurant from "../../components/Restaurant";
import { useState, useEffect } from "react";
import axios from "axios";

const RestaurantPage = (props) => {
  const selectedRestaurant = props.restaurants.filter((element) => {
    return element.id === props.restaurantId;
  });

  //   const [restaurantDetails, setRestaurantDetails] = useState({});
  //   const [productDetails, setProductDetails] = useState([]);

  //   useEffect(() => {
  //     console.log("restauranttt", props.restaurants);
  //     console.log("selecteddd", selectedRestaurant);
  //     console.log("idddd", restaurantId);
  //     setRestaurantDetails(selectedRestaurant[0]);
  //   }, []);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3002/api/v1/restaurants/1")
  //       .then((res) => {
  //         // console.log("getAllUsers > axios res=", res);
  //         //  console.log("Restaurant/index.js", res.data);
  //         setRestaurantDetails(res.data);

  //       })
  //       .catch((err) => {});
  //   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3002/api/v1/restaurant/1/dishes")
//       .then((res) => {
//         // console.log("getAllUsers > axios res=", res);
//         //  console.log("Restaurant/index.js", res.data);
//         setProductDetails(res.data);
//       })
//       .catch((err) => {});
//   }, []);

  return (
    <div>
      {selectedRestaurant.map((restaurant, index) => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantPage;
