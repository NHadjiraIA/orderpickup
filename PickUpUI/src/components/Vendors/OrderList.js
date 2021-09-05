
import OrderListItem from "./OrderListItem.js";
import { makeStyles } from '@material-ui/core/styles';
import { getOrdersNotCompletedByUserIdAndRestaurantId } from "../../services/orderService";
import React, { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  page: {
    marginLeft: '5em',
    marginRight: '5em',
    minHeight: '900px',
  }
}));
function OrderList() {
  const classes = useStyles();
  const [orderListData, setOrderListData] = useState([]);
  console.log("in orders list item - before useEffect")
  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        let userId = 1;
        let restaurantId = 1;
        getOrdersNotCompletedByUserIdAndRestaurantId(userId, restaurantId, false)
        .then((result) => {
          console.log(result);
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
        orderId={item.id}
        date={item.createdAt}
        products={item.orderdetails.map((detail) => {
          return (detail);
        })}
        numberOfItems={item.length}
        totalCost={item.orderdetails.map(d=> d.quantity * d.dish.price).reduce((a, b) => a+b, 0)} 
      />
    );
  });

  return (
   
    <div className={classes.page}>
      {item}
    </div>
  );
}

export default OrderList;
