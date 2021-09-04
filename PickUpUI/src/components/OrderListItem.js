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
import { CART } from "../navigation/CONSTANTS";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    // flex: 1,
    // flexGrow: 1,
  },
  accordion: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#38A3A5",
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
  // table: {
  //   // minWidth: 1000,
  //   width: "100%",
  // },

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
    // minWidth: 700,
    minWidth: 1200,
  },
  productImg: {
    height: "60%",
    width: "80%",
    marginBottom: "1em",
  },
  imgColumn: {
    width: "40px",
  },
  overallAccordion: {
    backgroundColor: "#38A3A5",
  },
}));

function OrderListItem(props) {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const products = props.products;

  useEffect(() => {
    console.log(products);
    setData(products);
  }, []);

  return (
    <body>
      <div className={classes.root}>
        <Accordion className={classes.overallAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes.accordion}>
              <Typography className={classes.heading}>
                {props.img}
                {props.restaurantName}
                <br></br>
                {props.date}
              </Typography>
              <div className={classes.accordionButtons}>
                <Button size="medium">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={CART}
                  >
                    Go to Cart
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.perorder}>
            <div className={classes.tableRoot}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      {/* <TableCell align="left" colSpan={2}><h4>Img.</h4></TableCell> */}
                      <TableCell className={classes.imgColumn} align="left">
                        <h4>Img.</h4>
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <h4>Item Name.</h4>
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <h4>Price Per Item</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>Quantity.</h4>
                      </TableCell>
                      <TableCell align="right">
                        <h4>Sum</h4>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow>
                        <TableCell align="left">
                          <img src={row.image} height="90px" width="90px" />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="left">
                          <h4>${row.price}</h4>
                        </TableCell>
                        <TableCell align="center">
                          <h4>{row.quantity}</h4>
                        </TableCell>
                        <TableCell align="right">
                          <h4>${row.price * row.quantity}</h4>
                        </TableCell>
                      </TableRow>
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
                          $
                          {data
                            .map((s) => s.quantity * s.price)
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
                          $
                          {(
                            data
                              .map((s) => s.quantity * s.price)
                              .reduce((a, b) => a + b, 0) * 1.13
                          ).toFixed(2)}
                        </h4>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </body>
  );
}

export default OrderListItem;
