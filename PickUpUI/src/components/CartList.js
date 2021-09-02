import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Counter from "./Counter";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { PAYMENT } from "../navigation/CONSTANTS";
import { useHistory } from "react-router-dom";

//FOR LOCALSTORAGE
// localstorage.getItem('quantity')

const TAX_RATE = 0.13;

const useStyles = makeStyles({
  root: {
    margin: "4em",
    typography: "50px",
    fontSize: "18px",
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    height: "60%",
    width: "50%",
    marginBottom: "1em",
  },
  imgColumn: {
    width: "30%",
  },
  checkoutButton: {
    backgroundColor: "black",
    color: "white",

    "&:hover": {
      backgroundColor: "black",
    },
  },
});

function CartList(props) {
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const cart = Object.values(props.cart);

  const classes = useStyles();

  function subtotal(data) {
    let total = 0;
    data.map((item) => {
      let itemPrice = Number(item.price) * Number(item.quantity);
      total += itemPrice;
    });
    return total;
  }

  const invoiceTaxes = TAX_RATE * total;
  const invoiceTotal = invoiceTaxes + total;

  const sum = (index) => {
    return (cart[index].quantity * cart[index].price).toFixed(2);
  };

  const calculateTotal = (items) => {
    const calculatedTotal = subtotal(items);
    setTotal(calculatedTotal);
  };
  const pay = (path) => {
    history.push({
      pathname: PAYMENT,
      state: {
        total: invoiceTotal,
      },
    });
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.imgColumn} align="left">
                <h2>Img.</h2>
              </TableCell>
              <TableCell align="left">
                {" "}
                <h2>Desc.</h2>
              </TableCell>
              <TableCell align="left">
                {" "}
                <h2>Price Per Item</h2>
              </TableCell>
              <TableCell align="center">
                <h2>Qty.</h2>
              </TableCell>
              <TableCell align="center">
                <h2>Sum</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row, index) => (
              <TableRow>
                <TableCell align="left">
                  <img className={classes.productImg} src={row.img_url} />
                </TableCell>
                <TableCell align="left">
                  <h2>{row.description}</h2>
                </TableCell>
                <TableCell>
                  <h2>${row.price}</h2>
                </TableCell>
                <TableCell>
                  <Counter
                    qty={row.quantity}
                    increment={() => props.increaseQuantity(row.id)}
                    decrement={() => props.decreaseQuantity(row.id)}
                  />
                </TableCell>
                <TableCell align="center">
                  <h2> ${sum(index)}</h2>
                </TableCell>
                <TableCell>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => props.removeItem(row.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calculateTotal(cart)}
                  >
                    Add to total
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table className={classes.table} aria-label="spanning table">
          <TableBody>
            <TableRow>
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}>
                <h2>Subtotal</h2>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <h2>${total.toFixed(2)}</h2>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h2>Tax</h2>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <h2>{`${(TAX_RATE * 100).toFixed(0)} %`}</h2>
              </TableCell>
              <TableCell align="right">
                <h2>${invoiceTaxes}</h2>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <h2>Total</h2>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <h2>${invoiceTotal.toFixed(2)}</h2>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Button
        fontSize="large"
        className={classes.checkoutButton}
        onClick={() => pay()}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartList;
