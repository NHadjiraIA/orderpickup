import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "1em",
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

function OfferListItem(props) {
  const [data, setData] = useState([]);
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Accordion className={classes.overallAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         
        </AccordionSummary>
        <AccordionDetails className={classes.perorder}>
          <div className={classes.tableRoot}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.imgColumn} align="left">
                      <h4>Name.</h4>
                    </TableCell>
                    <TableCell align="left">
                      <h4>Adress</h4>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow>
                      <TableCell align="left">
                        <img src={row.name} height="90px" width="90px" />
                      </TableCell>
                      <TableCell>{row.adress}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              
            </TableContainer>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default OfferListItem;
