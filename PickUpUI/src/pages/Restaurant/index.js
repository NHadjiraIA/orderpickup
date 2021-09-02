import React from "react";
import Restaurant from "../../components/Restaurant";

const RestaurantPage = (props) => {
  return (
    <div>
      <Restaurant {...props} />
    </div>
  );
};

export default RestaurantPage;
