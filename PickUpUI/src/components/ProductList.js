import React from "react";
import ProductListItem from "./ProductListItem.js";
import useStyles from "./ProductListStyle.js";

function ProductList(props) {
  const classes = useStyles();

  const testOrderData = [
    {
      id: 1,
      name: "food item 1",
      img_url:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
      description: "askjdfaskjfasdf",
      price: 500,
      calories: 123,
    },
    {
      id: 2,
      name: "food item 1",
      img_url:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
      description: "askjdfaskjfasdf",
      price: 598,
      calories: 198,
    },
    {
      id: 3,
      name: "food item 1",
      img_url:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
      description: "askjdfaskjfasdf",
      price: 598,
      calories: 198,
    },
  ];

  const item = testOrderData.map((item) => {
    return (
      <ProductListItem
        key={item.id}
        id={item.id}
        name={item.name}
        img_url={item.img_url}
        description={item.description}
        price={item.price}
        calories={item.calories}
      />
    );
  });

  return (
    <div className={classes.page}>
      {item}
      {/* have headers for category */}
      {/* show items under the headers */}
      {/* maybe have diff routes per diff types of items */}
      {/* try to handle on the backend  */}
    </div>
  );
}

export default ProductList;
