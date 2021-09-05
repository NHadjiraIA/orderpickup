import { ListItem, Typography } from "@material-ui/core";
import { useState, useEffect} from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";

import mainListItems from "./listItems";
import { getDishByRestaurant } from "../../services";

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
    "&:nth-of-type(odd)": {
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

function createData(img, name, calories, desc, size, type, price) {
  return { img, name, calories, desc, size, type, price };
}


const useStyles = makeStyles({
  root: {
    marginLeft: "10rem",
    marginRight: "10rem",
    width: "100%",
  },
  TableCell: {
    padding: "0px 8px",
  },
  table: {
    minWidth: 700,
    height: "100vh",
  },
  productImg: {
    height: "70%",
    width: "100%",
  },
  productstyle: {
    width: "10%",
  },
});

function Menu() {

  const classes = useStyles();
  const [age, setAge] = useState("");
  const [dishListData, setDishListData] = useState([]);
  console.log("in orders list item - before useEffect")
  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        let userId = 1;
        let restaurantId = 1;
        getDishByRestaurant(restaurantId)
        .then((result) => {
          console.log(result);
          setDishListData(result);
        });
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  }, [setDishListData]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {/* <List>
    {mainListItems}
    </List> */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <Grid columns={[{ field: "name", editable: true }]} />
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.productstyle}>
                Image
              </StyledTableCell>
              <StyledTableCell align="right">Item name</StyledTableCell>
              <StyledTableCell align="right">Calories&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Size&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Categorize&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Delete Item</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dishListData.map((dish) => (
              <StyledTableRow key={dish.name}>
                <StyledTableCell align="left" scope="row">
                  <img height="90px" width="90px" src={dish.img_url} />
                </StyledTableCell>
                <StyledTableCell align="right">{dish.name}</StyledTableCell>
                <StyledTableCell align="right">{dish.calories}</StyledTableCell>
                <StyledTableCell align="right">
                  {dish.description}
                </StyledTableCell>
                <StyledTableCell align="right">{dish.size}</StyledTableCell>
                <StyledTableCell align="right">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="dairy free"
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Vegan</MenuItem>
                    <MenuItem value={false}>Gluten-free</MenuItem>
                    <MenuItem value={false}>Dairy-free</MenuItem>
                    <MenuItem value={false}>No-nuts</MenuItem>
                    <MenuItem value={false}>Cannabis edible</MenuItem>
                    <MenuItem value={false}>Others</MenuItem>
                  </Select>
                </StyledTableCell>
                <StyledTableCell align="right">{dish.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" color="primary" disableElevation>
                    DELETE
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Menu;
