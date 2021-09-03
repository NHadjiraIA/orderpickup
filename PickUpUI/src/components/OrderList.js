import React, { useState,useEffect } from "react";
import OrderListItem from "./OrderListItem.js";
import useStyles from "./OrderListStyle.js";
import { useHistory, useLocation } from "react-router-dom";
import {getOrdersDoneByUserId} from "../services/orderService"

function OrderList() {
  const location = useLocation();
  const classes = useStyles();
  let userId = location?.state?.userId;

  const [orderListData, setOrderListData] = useState([]);
  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        userId =1;
        getOrdersDoneByUserId(userId, true)
          .then(result=>{
            setOrderListData(result);
          });
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  }, [setOrderListData]);


  const item = orderListData.map((item) => {
    return (
      <OrderListItem 
        key={item.id} 
        date={item.createdAt}
        restaurantName={item.restaurantName}
        products={item.orderdetails.map(a => ({image:a.dish.img_url, name: a.dish.name, price:a.dish.price, quantity:a.quantity}))}
        numberOfItems={item.orderdetails.map(a => a.quantity)}
        totalCost={item.orderdetails.map(a=>a.dish.price * a.quantity) } 
      />
    );
  });

  return (
    <div className={classes.page}>
      <br></br>
      <h1>Past Orders</h1>
      <br></br>
      {item}
    </div>
  );
}

export default OrderList;
