import React from "react";
import ProductListItem from "./ProductListItem.js";
import useStyles from "./ProductListStyle.js";

function ProductList() {
  const classes = useStyles();

  const testOrderData = [
    { 
      id: 1, 
      name: "food item 1",
      description: 'askjdfaskjfasdf',
      price: 500,
      calories: 123 
    },
    { 
      id: 1, 
      name: "food item 1",
      description: 'askjdfaskjfasdf',
      price: 598,
      calories: 198 
    },
    { 
      id: 1, 
      name: "food item 1",
      description: 'askjdfaskjfasdf',
      price: 598,
      calories: 198 
    },
  ];

  const item = testOrderData.map((item) => {
    return (

      <ProductListItem 
        key={item.id} 
        itemName={item.name} 
        description={item.description}
        price={item.price}
        calories={item.calories}
      />
    )
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
