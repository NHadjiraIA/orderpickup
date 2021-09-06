import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Counter from "./Counter.js";
import TextField from "@material-ui/core/TextField";
import { CART } from "../navigation/CONSTANTS";
import { useHistory } from "react-router-dom";
import { useCart } from "../context/cart";
import { makeStyles } from "@material-ui/core/styles";
import cannabis from "./images/cannabis.png";
import containsNuts from "./images/nutRed.png";
import dairyFree from "./images/dairyFree.png";
import glutenFree from "./images/glutenFree.png";
import halal from "./images/halal.png";
import vegan from "./images/vegan.png";

const emails = ["username@gmail.com", "user02@gmail.com"];

const useStyles = makeStyles((theme) => ({
  //for entire box that holds product info
  entireProduct: {
    height: "19em",
    width: "53em",
    backgroundColor: "#e9ebf0",
    marginBottom: "1em",
    display: "flex",
    // justifyContent: 'row',
    justifyContent: "center",
    margin: "1em",
    cursor: "pointer",

    "& img": {
      width: "35%",
      height: "100%",
    },
  },
  productIntro: {
    paddingTop: "1em",
    width: "65%",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },

  //for just the price and calories
  priceAndCalories: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
  },

  calories: {
    paddingLeft: "0.5em",
    borderLeft: "black solid 2px",
  },

  //for popup
  entireDialog: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    height: "27em",

    "& img": {
      height: "100%",
      width: "40%",
      padding: "1.5em",
    },
  },

  dialogDetail: {
    width: "70%",
    padding: "1.5em",
  },
  //for the buttons in the dialogue box
  finishingOrder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // position: 'fixed',
    "& p": {
      fontSize: "35px",
    },
  },

  cartButton: {
    backgroundColor: "black",
    color: "white",
    width: "30%",
    height: "30%",
    alignItems: "baseline",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  numberOfItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  RemoveCircleIcon: {
    backgroundColor: "black",
    color: "white",
  },

  AddCircleIcon: {
    backgroundColor: "white",
    color: "black",
  },
}));
function DishSelection(dish) {
  const testArray = [];
  if (dish.vegan) {
    testArray.push(
      <img src={vegan} style={{ height: "45px", width: "45px" }} />
    );
  }
  if (dish.gluten) {
    testArray.push(
      <img src={glutenFree} style={{ height: "45px", width: "45px" }} />
    );
  }
  if (dish.halal) {
    testArray.push(
      <img src={halal} style={{ height: "45px", width: "45px" }} />
    );
  }
  if (dish.dairy) {
    testArray.push(
      <img src={dairyFree} style={{ height: "45px", width: "45px" }} />
    );
  }
  if (dish.nuts) {
    testArray.push(
      <img src={containsNuts} style={{ height: "45px", width: "45px" }} />
    );
  }
  if (dish.marijuana) {
    testArray.push(
      <img src={cannabis} style={{ height: "45px", width: "45px" }} />
    );
  }

  return testArray;
}
function ProductListItem(props) {
  let history = useHistory();
  const cart = useCart();
  const clickToCart = () => {
    history.push({
      pathname: CART,
      state: {
        id: props.id,
        name: props.name,
        quantity: quantity,
        img_url: props.img_url,
        description: props.description,
        price: props.price,
        calories: props.calories,
        restaurantId: props.restaurantId,
        userId: props.userId
      },
    });
  };

  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cartItem = {
      id: props.id,
      name: props.name,
      quantity: quantity,
      img_url: props.img_url,
      description: props.description,
      price: props.price,
      calories: props.calories,
    };
    cart.addItem(cartItem);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className={classes.entireDialog}>
        <img src={props.img_url} />

        <div className={classes.dialogDetail}>
          <DialogTitle id="simple-dialog-title"></DialogTitle>
          <Typography variant="h4"> {props.name}</Typography>
          <p>{props.description}</p>
          <h4>${props.price}</h4>
          <h4>{props.calories} Cals.</h4>

          <div>
            <Typography variant="h5">Special Requests</Typography>
            <br></br>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Tell us what you'd like!"
                variant="outlined"
                fullWidth
              />
            </form>
          </div>

          <div className={classes.finishingOrder}>
            <div className={classes.numberOfItem}>
              <Counter
                // index={index}
                qty={quantity}
                increment={increment}
                decrement={decrement}
              />
            </div>
            <Button
              className={classes.cartButton}
              size="medium"
              onClick={addToCart}
            >
              Add {quantity} to Cart
            </Button>
            <Button
              className={classes.cartButton}
              size="medium"
              onClick={clickToCart}
            >
              Go to Cart
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

ProductListItem.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ProductListItemDemo(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div
      // onClick={handleClickOpen}
      className={classes.entireProduct}
      // onClick={handleClose}
    >
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      {/* <br /> */}
      <div className={classes.productIntro}>
        <Typography onClick={handleClickOpen} align="left">
          <h3>{props.name}</h3>
        </Typography>
        <Typography align="left" onClick={handleClickOpen} variant="body">
          <p>{props.description} </p>
        </Typography>
        <Typography align="left">
          <div className={classes.tags}>{DishSelection(props.dish)}</div>
        </Typography>
        <br></br>
        <div className={classes.priceAndCalories}>
          <Typography onClick={handleClickOpen}>${props.price}</Typography>
          <Typography onClick={handleClickOpen} className={classes.calories}>
            {props.calories} Cals.
          </Typography>
        </div>
        {/* <br/> */}
        {/* <Button variant="outlined" color="primary">Add to Cart</Button> */}
        <ProductListItem
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          key={props.id}
          id={props.id}
          name={props.name}
          img_url={props.img_url}
          description={props.description}
          price={props.price}
          calories={props.calories}
          restaurantId = {props.restaurantId}
          userId = {props.userId}
        />
      </div>
      <img src={props.img_url} onClick={handleClickOpen} />
    </div>
  );
}
