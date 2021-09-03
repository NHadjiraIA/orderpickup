import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Counter from "./Counter";
import Button from "@material-ui/core/Button";
import { PAYMENT } from "../navigation/CONSTANTS";
import { useHistory, useLocation } from "react-router-dom";
import { useCart } from "../context/cart";
import { postOrder } from "../services/orderService";

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
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const cart = useCart();
  const cartList = Object.values(cart.cart);
  console.log(cartList);
  const classes = useStyles();

  const quantity = location?.state?.quantity;
  //const dishId = location?.state?.id;
  const description = location?.state?.description;
  const image = location?.state?.img_url;
  const name = location?.state?.name;
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
  const [errors, setErrors] = useState("");
  const [detailsOrderData, setdetailsOrderData] = useState([]);

  const sum = (index) => {
    return (cartList[index].quantity * cartList[index].price).toFixed(2);
  };

  const calculateTotal = (items) => {
    const calculatedTotal = subtotal(items);
    setTotal(calculatedTotal);
  };
  const pay = () => {
    let restaurantId = 1;
    let userId = 1;
    let orderId = 8;
    let dishId = 2;
    var requestDto = {
      userId: userId,
      restaurantId: restaurantId,
      done: true,
      details: [
        {
          dishId: dishId,
          orderId: orderId,
          quantity: quantity,
        },
      ],
    };
    postOrder(requestDto)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
        if (err.response.status == 404) {
          setErrors("No comment found!");
        } else {
          if (err.response.status == 400) {
            setErrors("restaurantId is not valid!");
          } else {
            setErrors("Unknow error!");
          }
        }
      });

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
            {cartList.map((row, index) => (
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
                    increment={() => cart.increaseQuantity(row.id)}
                    decrement={() => cart.decreaseQuantity(row.id)}
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
                    onClick={() => cart.removeItem(row.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calculateTotal(cartList)}
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
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default CartList;
