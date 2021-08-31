import { Typography } from '@material-ui/core';
import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Counter from './Counter'
const TAX_RATE = 0.13;

const useStyles = makeStyles({
  root: {
    marginLeft: '4em',
    marginRight: '4em',
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    height: '56%',
    width: '10%',
    marginBottom: '1em',
  },
});

const testImg = 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty) {
  return qty;
}

function createRow(img, pricePer, desc, qty) {
  const price = priceRow(qty);
  return { img, pricePer, desc, qty, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(testImg, 'Paperclips (Box)', 3.45, 100),
  createRow(testImg,'Paper (Case)', 5.62, 10),
  createRow(testImg,'Waste Basket', 15.20, 2),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function CartList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>empty cart</Typography>
      <Typography>Restaurant</Typography>

        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2}>Img.</TableCell>
              <TableCell align="left">Price Per Item.</TableCell>
              <TableCell align="left">Desc.</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>

                <TableCell align="left">
                  <img className={classes.productImg} src={row.img} />
                </TableCell>
                <TableCell>{row.pricePer}</TableCell>
                <TableCell align="left">{row.desc}</TableCell>

                  <Counter />

                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
  
};

export default CartList;
