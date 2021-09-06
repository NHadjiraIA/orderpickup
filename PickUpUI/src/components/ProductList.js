import React from "react";
import ProductListItem from "./ProductListItem.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    // marginLeft: '0.5em',
    // marginRight: '0.5em',
    // marginTop: '1em',
    // minHeight: '900px',

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: 'center',
    alignItems: "left",
  },
}));
function ProductList(props) {
  const classes = useStyles();
  const restaurantInfo = props.restaurant;
  const userId = props.userId;

  const item = props.productDetails.map((item) => {
    // console.log("itemmmmmmm", item);
    return (
      <ProductListItem
        key={item.id}
        id={item.id}
        name={item.name}
        img_url={item.img_url}
        description={item.description}
        price={item.price}
        calories={item.calories}
        userId={userId}
        restaurantId = {restaurantInfo.id}
        dish= {item}
      />
    );
  });

  return <div className={classes.page}>{item}</div>;
}

export default ProductList;
