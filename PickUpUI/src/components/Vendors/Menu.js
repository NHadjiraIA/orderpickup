
import { ListItem, Typography } from '@material-ui/core';
import { useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';

import mainListItems from './listItems';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


// const SimpleSelect=(theme)=> {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

function createData(img, name, calories, desc, size,type,price) {
  return { img, name, calories, desc, size,type,price };
}

const rows = [
  createData("https://images.unsplash.com/photo-1543826173-70651703c5a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80",'Frozen yoghurt', 159,6,0,   4.0,),
  createData("img", 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData("img", 262, 16.0, 24, 6.0),
  createData("img", 305, 3.7, 67, 4.3),
  createData("img", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  root: {
    marginLeft: "10rem",
    marginRight: "10rem",
    width: '100%',
  },
  TableCell:{
    padding: "0px 8px"
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    height: '70%',
    width: '100%'
  },
  productstyle:{
    width:'10%'
  }
});





 function Menu() {

  const classes = useStyles();
const [age, setAge] = useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};
  return (
    <>
    <List>
    {mainListItems}
    </List>
   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.productstyle} >Image</StyledTableCell>
            <StyledTableCell align="right">Item name</StyledTableCell>
            <StyledTableCell align="right">Calories&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Size&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Type&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Delete?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow  key={row.name}>
              <StyledTableCell  align="left" scope="row">
              <img className={classes.productImg} src={row.img}/>
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right"><Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="dairy free"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select></StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="primary" disableElevation>
  DELETE
</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
  );
          };

          export default Menu;