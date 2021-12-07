import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getAllBranches } from "../../services/branchService";
import { makeStyles } from "@material-ui/core/styles";
import { ListOfferItem } from "./ListOffersItem";

const useStyles = makeStyles((theme) => ({
  page: {
    marginLeft: "5em",
    marginRight: "5em",
    // minHeight: "900px",
    paddingTop: "100px",
    height: "100vh",
  },
}));

function Branch(props) {
  const location = useLocation();
  const classes = useStyles();

  const [branchListData, setBranchListData] = useState([]);
  useEffect(() => {
    return new Promise((resolve, reject) => {
      try {
        getAllBranches().then((result) => {
            setBranchListData(result);
        });
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  }, [setBranchListData]);

  const item = branchListData.map((item) => {
    return (
      <ListOfferItem
        key={item.id}
        date={item.createdAt}
        branchName={item.name}
        
        numberOfItems={item.orderdetails.map((a) => a.quantity)}
        totalCost={item.orderdetails.map((a) => a.dish.price * a.quantity)}
      />
    );
  });

  return (
    <div className={classes.page}>
      <br></br>
      <h1>List Banks</h1>
      <br></br>
      {item}
    </div>
  );
}

export default Branch;
