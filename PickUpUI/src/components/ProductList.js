import React from "react";
import ProductListItem from "./ProductListItem.js";
import useStyles from "./ProductListStyle.js";

function ProductList(props) {
  const classes = useStyles();


  const item = props.productDetails.map((item) => {
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
