import React from "react";
import OrderListItem from "./OrderListItem.js";
import useStyles from "./OrderListStyle.js";

function OrderList() {
  const classes = useStyles();

  const testOrderData = [
    { 
      id: 1,
      date: 'aug, 30, 2021',
      restaurantName: "Restaurant1", 
      img:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      products: [
        
        'product1',
        'product2',
        'product3',
      ],
      numberOfItems: 3,
      totalCost: 23434,
    },
    { 
      id: 2, 
      date: 'aug, 30, 2021',
      restaurantName: "Restaurant2", 
      img:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      products: [
        
        'product1',
        'product2',
      ],
      numberOfItems: 2,
      totalCost: 23467,
    },
  ];

  const item = testOrderData.map((item) => {
    return (
      <OrderListItem 
        key={item.id} 
        date={item.date}
        restaurantName={item.restaurantName}
        products={item.products}
        numberOfItems={item.numberOfItems}
        totalCost={item.totalCost} 
      />
    );
  });

  return (
    <div className={classes.page}>
      <h1>Past Orders</h1>
      {item}
    </div>
  );
}

export default OrderList;
