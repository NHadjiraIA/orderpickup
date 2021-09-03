// import logo from './logo.svg';
import React, { useState } from "react";
import useStyles from "./ProductListItemStyle.js";
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

const emails = ["username@gmail.com", "user02@gmail.com"];

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
      }
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
          <DialogTitle id="simple-dialog-title">{props.name}</DialogTitle>
          <p>{props.description}</p>
          <h4>${props.price}</h4>
          <h4>{props.calories} Cals.</h4>

          <div>
            <h3>Special Requests</h3>
            <form className={classes.root} noValidate autoComplete="off">
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
        <Typography onClick={handleClickOpen}>
          <h3>{props.name}</h3>
        </Typography>
        <Typography onClick={handleClickOpen}>
          <p>{props.description}</p>
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <div className={classes.priceAndCalories}>
          <Typography onClick={handleClickOpen}>${props.price}</Typography>
          <Typography onClick={handleClickOpen} className={classes.calories}>
            {props.calories}Cals.
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
        />
      </div>
      <img src={props.img_url} onClick={handleClickOpen} />
    </div>
  );
}
