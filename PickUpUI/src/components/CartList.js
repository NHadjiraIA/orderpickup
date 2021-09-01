import React, {useState, useEffect} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Counter from './Counter'
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';


const TAX_RATE = 0.13;

const useStyles = makeStyles({
  root: {
    margin: '4em',
    typography: '50px',
    fontSize: '18px',
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    height: '60%',
    width: '90%',
    marginBottom: '1em',
  },
  imgColumn: {
    width: '30%'
  },
  checkoutButton: {
    backgroundColor: 'black',
    color:'white',
      
      '&:hover': {
        backgroundColor: 'black',
      },
  },
});


function CartList() {

  const [data, updateData] = useState([]);
  const classes = useStyles();

  const testImg = 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  
  function createRow(img, desc, pricePer, qty) {
    return { img, desc, pricePer, qty};
  }
  
  function subtotal(items) {
    console.log('ITEMS', items)
    let total = 0;
    items.map( item => {
      let itemPrice = Number(item.pricePer) * Number(item.qty)
      total += itemPrice
    })
    return total;
  }
  
  // function subTotal(data, index) {
  //   let sum = 0;
  //   for (let i = index; i < data.length; i++) {
  //     sum + data[i];
  //   }
  //   return sum;
  // }


  //ccreate local storage 
  //set items/objects from local storage to rows

  const rows = [];
  let rowItem = createRow(testImg, 'Paperclips (Box)', 3.45, 100);
  rows.push(rowItem);
  rowItem = createRow(testImg,'Paper (Case)', 5.62, 10)
  rows.push(rowItem);
  rowItem = createRow(testImg,'Waste Basket', 15.20, 2)
  rows.push(rowItem);
  
  useEffect(() => {
    updateData(rows);
  }, []);

  // const invoiceSubtotal = subTotal(rows);

  const invoiceSubtotal = subtotal(rows);


  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const sum = (index) => {
    return (data[index].qty * data[index].pricePer).toFixed(2)
  }

  //for the counter
  const increment = (index) => {
    let tempState = data
    
    tempState[index].qty = tempState[index].qty + 1
    updateData([...tempState])

  }

  const decrement = (index) => {
    let tempState = data
    if (tempState[index].qty > 1) {
      tempState[index].qty = tempState[index].qty - 1
      updateData([...tempState])

    }
  }


  return (
    <div className={classes.root}>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.imgColumn} align="left"><h2>Img.</h2></TableCell>
              <TableCell align="left"> <h2>Desc.</h2></TableCell>
              <TableCell align="left"> <h2>Price Per Item</h2></TableCell>
              <TableCell align="center"><h2>Qty.</h2></TableCell>
              <TableCell align="center"><h2>Sum</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow>
                <TableCell align="left">
                  <img className={classes.productImg} src={row.img} />
                </TableCell>
                <TableCell align="left"><h2>{row.desc}</h2></TableCell>
                <TableCell><h2>${row.pricePer}</h2></TableCell>
                <TableCell>
                  <Counter index={index} qty={row.qty} increment={increment} decrement={decrement} />
                </TableCell>
                <TableCell align="center"><h2>${sum(index)}</h2></TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon color="inherit" fontSize='large' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            
          </TableBody>
        </Table>


        <Table className={classes.table} aria-label="spanning table">
          <TableBody>
            <TableRow>
              <TableCell rowSpan={5} />
              <TableCell colSpan={2}><h2>Subtotal</h2></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"><h2>${invoiceSubtotal.toFixed(2)}</h2></TableCell>
              <TableCell></TableCell>

            </TableRow>
            <TableRow>
              <TableCell><h2>Tax</h2></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"><h2>{`${(TAX_RATE * 100).toFixed(0)} %`}</h2></TableCell>
              <TableCell align="right"><h2>${invoiceTaxes}</h2></TableCell>
              <TableCell></TableCell>

            </TableRow>
            <TableRow>
              <TableCell colSpan={2}><h2>Total</h2></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"><h2>${invoiceTotal.toFixed(2)}</h2></TableCell>
              <TableCell></TableCell>

            </TableRow>
          </TableBody>

        </Table>

      </TableContainer>
      <br></br>
      <Button fontSize='large' className={classes.checkoutButton}>Checkout</Button>
    </div>
  )
  
};

export default CartList;
