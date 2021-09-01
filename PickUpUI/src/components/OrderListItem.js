// import React from 'react';
import useStyles from './OrderListItemStyle.js';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CART } from "../navigation/CONSTANTS";

import React, {useState, useEffect} from 'react'; 

function OrderListItem(props) {
  const [data, updateData] = useState([]);
  const classes = useStyles();

  const testImg = 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  
  function createRow(img, desc, pricePer, qty, subtotal) {
    return { img, desc, pricePer, qty, subtotal};
  }

  const rows = [];
  let rowItem = createRow(testImg, 'Paperclips (Box)', 3.45, 100, 340);
  rows.push(rowItem);
  rowItem = createRow(testImg,'Paper (Case)', 5.62, 10, 56.2)
  rows.push(rowItem);
  rowItem = createRow(testImg,'Waste Basket', 15.20, 2, 30.40)
  rows.push(rowItem);
  
  useEffect(() => {
    updateData(rows);
  }, []);

  return (
    <body>
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
                {props.restaurantName}
                <br></br>
                {props.date}
              </Typography>
              <div className={classes.accordionButtons}>
                <Button variant='contained' color='default'>Reorder All</Button>
                <a href={CART}><Button size='medium'>Go to Cart</Button></a>
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
                      <TableCell className={classes.imgColumn} align="left"><h4>Img.</h4></TableCell>
                      <TableCell align="left"> <h4>Desc.</h4></TableCell>
                      <TableCell align="left"> <h4>Price Per Item</h4></TableCell>
                      <TableCell align="right"><h4>Qty.</h4></TableCell>
                      <TableCell align="right"><h4>Sum</h4></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow>
                        <TableCell align="left">
                          <img className={classes.productImg} src={row.img} />
                        </TableCell>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell align="left">${row.pricePer}</TableCell>
                        <TableCell align="left">{row.qty}</TableCell>
                        <TableCell align="right">${row.subtotal}</TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
                    
                    
                <Table className={classes.table} aria-label="spanning table">
                  <TableBody>
                    {/* <TableRow>
                      <TableCell rowSpan={5} />
                      <TableCell colSpan={2}><h4>Subtotal</h4></TableCell>
                      <TableCell align="right"><h4>${subtotal}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Tax</h4></TableCell>
                      <TableCell align="right"><h4>{`${(TAX_RATE * 100).toFixed(0)} %`}</h4></TableCell>
                      <TableCell align="right"><h4>${invoiceTaxes}</h4></TableCell>
                    </TableRow> */}
                    <TableRow>
                      <TableCell colSpan={2}><h4>Pre-Tax</h4></TableCell>
                      <TableCell align="right"><h4>$12340</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}><h4>Total</h4></TableCell>
                      <TableCell align="right"><h4>$12340</h4></TableCell>
                    </TableRow>
                  </TableBody>
                  
                </Table>
              </TableContainer>

            </div>

            {/* <Typography >
              <div className={classes.orderlist}>
                <p>{props.products.product1.name}</p>
                <p>{props.products.product2.name}</p>
                <br></br>
                <p>Quantity: {props.numberOfItems}</p>
                <br></br>
                <p>${props.totalCost/100}</p> 

                <div>
                  <Button size='medium'>Add 1 to Cart</Button>
                  <Button size='medium'>Go to Cart</Button>
                </div>

              </div>
            </Typography> */}
          </AccordionDetails>
        </Accordion>
      </div>
    </body>
  );
}

export default OrderListItem;
