// import logo from './logo.svg';
import React from 'react';
import useStyles from './ProductListItemStyle.js';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import Checkbox from '@material-ui/core/Checkbox';
//icon button
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function ProductListItem(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  // const [value, setValue] = React.useState('female');
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedC: true,
  // });

  // const handleChangeCheckBox = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  const handleClose = () => {
    onClose(selectedValue);
  };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

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
          {/* <FormGroup column>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChangeCheckBox}
                  name="checkedA"
                  color="primary"
                />
              }
              label="sneeze on it"
            />
          </FormGroup> */}
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
              <IconButton 
                aria-label="minus-item" 
                className={classes.margin}
              >
                <RemoveCircleIcon fontSize='large'/>
              </IconButton>
              <p>1</p>
              <IconButton aria-label="add-item" className={classes.margin}>
                <AddCircleIcon fontSize='large'/>
              </IconButton>
            </div>
            <Button className={classes.cartButton} size='medium' >Add 1 to Cart</Button>
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
