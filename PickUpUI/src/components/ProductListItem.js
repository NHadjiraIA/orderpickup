// import logo from './logo.svg';
import React, {useState} from 'react';
import useStyles from './ProductListItemStyle.js';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter.js'
import TextField from '@material-ui/core/TextField';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function ProductListItem(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [quantity, updateQuantity] = useState(1);


  const handleClose = () => {
    onClose(selectedValue);
  };

  const increment = () => {
    updateQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(quantity-1)
    }
  }

  return (
    <Dialog 
      onClose={handleClose} 
      fullWidth 
      maxWidth='md' 
      aria-labelledby="simple-dialog-title" 
      open={open} 
    >
      <div className={classes.entireDialog}>
        <img src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80'/>

        <div className={classes.dialogDetail}>
          <DialogTitle id="simple-dialog-title">Product Name</DialogTitle>
          <p>description description description description description description description description description description description description description description description description description description description description description description description</p>
          <h4>$5.62</h4>
          <h4>591 Cals.</h4>
          
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
            <Button className={classes.cartButton} size='medium' >Add {quantity} to Cart</Button>
            <Button className={classes.cartButton} size='medium'>Go to Cart</Button>
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

export default function ProductListItemDemo() {
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
        <Typography onClick={handleClickOpen}><h3>Name</h3></Typography>
        <Typography onClick={handleClickOpen}>
          <p>Product Intro Product Intro Product Intro Product Intro Product Intro Intro Product Intro Intro Product Intro </p>
        </Typography>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={classes.priceAndCalories}>
          <Typography onClick={handleClickOpen}>$4.59</Typography>
          <Typography 
            onClick={handleClickOpen}
            className={classes.calories}
            >
              258 Cals.
            </Typography>
        </div>
        {/* <br/> */}
        {/* <Button variant="outlined" color="primary">Add to Cart</Button> */}
        <ProductListItem selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
      <img src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80' onClick={handleClickOpen}/>
    </div>

  );
}
