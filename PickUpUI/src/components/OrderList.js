import React, { useState, useEffect } from "react";
import OrderListItem from "./OrderListItem.js";
import { useHistory, useLocation } from "react-router-dom";
import { getOrdersDoneByUserId } from "../services/orderService";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    marginLeft: "5em",
    marginRight: "5em",
    // minHeight: "900px",
    paddingTop: "100px",
    height: "100vh",
  },
}));

function OrderList(props) {
  const location = useLocation();
  const classes = useStyles();
  let userId = location?.state?.userId;

  const [orderListData, setOrderListData] = useState([]);
  console.log("ORDERLIST DATA", orderListData);
  console.log("PROPS FROM ORDERLIST", props);
  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        getOrdersDoneByUserId(userId, true).then((result) => {
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
        restaurantName={item.title}
        products={item.orderdetails.map((a) => ({
          image: a.dish.img_url,
          name: a.dish.name,
          price: a.dish.price,
          quantity: a.quantity,
        }))}
        numberOfItems={item.orderdetails.map((a) => a.quantity)}
        totalCost={item.orderdetails.map((a) => a.dish.price * a.quantity)}
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
