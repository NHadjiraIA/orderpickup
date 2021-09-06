import React from "react";
import Restaurant from "../../components/Restaurant";
import { useLocation } from "react-router-dom";

const RestaurantPage = () => {
  const location = useLocation();
  const userId = location?.state?.userId;
  const restaurantInfo = location?.state?.restaurantInfo;
  return (
    <div>
      <Restaurant userId={userId} restaurantInfo={restaurantInfo}/>
    </div>
  );
};

export default RestaurantPage;
