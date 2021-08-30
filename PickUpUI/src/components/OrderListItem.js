import React from 'react';
import useStyles from './OrderListItemStyle.js';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ProductListItemDemo from './ProductListItem.js'
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//garbage can
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

function OrderListItem(props) {
  const classes = useStyles();

  function createData(name, quantity, price) {
    return { name, quantity, price };
  }
  
  const rows = [ 
    createData(props.products.product1.name, props.numberOfItems, (props.totalCost/100)),
    createData(props.products.product2.name, props.numberOfItems, (props.totalCost/100)),
  ];

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
              <Button variant='contained' color='default'>Reorder All</Button>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.perorder}>

          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {/* <TableCell align="right">Name</TableCell> */}
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    {/* <TableCell align="right">{row.name}</TableCell> */}
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>${row.price}</TableCell>
                  </TableRow>
                ))} 
              </TableBody>
            </Table>
            <Typography align="right">Total: $2937463</Typography>
            <div>
              <Button size='medium'>Add 1 to Cart</Button>
              <Button size='medium'>Go to Cart</Button>
            </div>
          </TableContainer>

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
