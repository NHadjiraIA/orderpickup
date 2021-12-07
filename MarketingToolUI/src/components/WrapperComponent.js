import { RouterConfig } from "../navigation/RouterConfig";
import { Route, useRouteMatch } from "react-router-dom";
import React, { Component }  from 'react';
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
//import MainListItems from "./Vendors/listItems";

export default function WrapperComponent(props) {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/branches")
      .then((res) => {
        setBranches(res.data);
      })
      .catch((err) => {});
  }, []);
  const matched = useRouteMatch("/vendors/");
  const [userName, setUserName]= useState("");
  useEffect(()=>{
    console.log("this is the user in wrapperComp",userName)
  })
  return (
    <div>
        <Navigation/>
        {/* <Route path={"/"} render={() => (!matched ? <Navigation userName={userName}/> : null)} /> */}
        <RouterConfig branches={branches}   
        
        />
        <Footer />
    </div>
  );
}
