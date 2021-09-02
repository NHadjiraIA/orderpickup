import React from "react";
import Restaurant from "../../components/Restaurant";
import { useState, useEffect } from "react";
import axios from "axios";



export const Restaurantpage = (props) => {

    const restaurantId = props.restaurantId
    const restaurants = props.restaurants
    const selectedRestaurant = restaurants.filter((element)=>{
        return element.id === restaurantId
    })

const [restaurantDetails, setRestaurantDetails] = useState({});
  const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
    console.log("restauranttt", props.restaurants);
console.log("selecteddd", selectedRestaurant);
console.log("idddd", restaurantId);
setRestaurantDetails(selectedRestaurant[0])
    
}, [])

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



  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/restaurant/1/dishes")
      .then((res) => {
        // console.log("getAllUsers > axios res=", res);
        //  console.log("Restaurant/index.js", res.data);
        setProductDetails(res.data);
      })
      .catch((err) => {});
  }, []);

  

  return (
    <div>
      <Restaurant restaurant={restaurantDetails} product={productDetails} />
    </div>
  );
};
