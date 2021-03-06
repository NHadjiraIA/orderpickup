// https://codepen.io/dhanishgajjar/pen/OgYdzRimport React, {useState, useEffect} from 'react';
import React, { useState, useEffect } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import { Restaurant } from "@material-ui/icons";
import { putOrder } from "../../services";

//material UI styling

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "0.5em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  orderList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  accordion: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      backgroundColor: "black",
      color: "white",

      "&:hover": {
        backgroundColor: "black",
      },
    },
  },

  accordionButtons: {
    width: "20em",
    display: "flex",
    justifyContent: "space-between",
  },

  perorder: {
    backgroundColor: "#e9ebf0",
    display: "flex",
    justifyContent: "center",
  },
  table: {
    minWidth: 650,
  },

  cartButtons: {
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },

    "& button": {
      backgroundColor: "black",
      color: "white",

      "&:hover": {
        backgroundColor: "black",
      },
    },

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  tableRoot: {
    display: "flex",
    justifyContent: "center",
    margin: "1em",
    typography: "50px",
    fontSize: "18px",
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    // height: '60%',
    width: "80%",
    marginBottom: "1em",
  },
  imgColumn: {
    width: "50px",
  },
  activeButton: {},
}));

function OrderListItemRow({ row, toggleOrder, completed }) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell align="left">
        <img className={classes.productImg} src={row.dish.img_url} />
      </TableCell>
      <TableCell>{row.dish.name}</TableCell>
      <TableCell>{row.specialRequest}</TableCell>
      <TableCell align="left">${row.dish.price}</TableCell>
      <TableCell align="left">{row.quantity}</TableCell>
      <TableCell align="right">
        ${row.quantity * Number(row.dish.price).toFixed(2)}
      </TableCell>
    </TableRow>
  );
}

function OrderListItem(props) {
  const classes = useStyles();
  const [completedItems, setCompletedItems] = useState({});
  const [completed, setCompleted] = useState("Not completed");

  const updateOrderCompleted = (event) => {
    let updateOrderDto = {
      id: props.orderId,
      completed: true,
    };

    try {
      putOrder(updateOrderDto)
        .then((res) => {
          setCompleted("Completed");
        })
        .catch((err) => {
          console.log("getNextQuestion > updateUserAnswer> err=", err);
        });
    } catch (error) {
      console.error("signin error!==", error);
    }
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordion}>
            <Typography className={classes.heading}>
              {props.img}
              Order: {props.orderId}
              <br></br>
              {props.date}
              <br></br>
              {completed}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.perorder}>
          <div className={classes.tableRoot}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.imgColumn} align="left">
                      <h4>Img.</h4>
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <h4>Name</h4>
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <h4>Special Request</h4>
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <h4>Price Per Item</h4>
                    </TableCell>
                    <TableCell align="right">
                      <h4>Qty.</h4>
                    </TableCell>
                    <TableCell align="right">
                      <h4>Sum</h4>
                    </TableCell>
                    <TableCell align="right">
                      <h4>Status</h4>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.products.map((row) => (
                    <OrderListItemRow
                      key={row.id}
                      row={row}
                      completed={completedItems[row.id] === true}
                    />
                  ))}
                </TableBody>
              </Table>

              <Table className={classes.table} aria-label="spanning table">
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <h4>Pre-Tax</h4>
                    </TableCell>
                    <TableCell align="right">
                      <h4>
                        ${" "}
                        {props.products
                          .map((p) => p.quantity * p.dish.price)
                          .reduce((a, b) => a + b, 0)
                          .toFixed(2)}
                      </h4>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <h4>Total</h4>
                    </TableCell>
                    <TableCell align="right">
                      <h4>
                        ${" "}
                        {(
                          props.products
                            .map((p) => p.quantity * p.dish.price)
                            .reduce((a, b) => a + b, 0) * 1.13
                        ).toFixed(2)}
                      </h4>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={updateOrderCompleted}
                        color={completed ? "green" : "secondary"}
                        className={completed ? classes.activeButton : ""}
                      >
                        {completed}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
//)}
export default OrderListItem;
