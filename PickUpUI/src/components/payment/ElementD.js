import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import CardForm from "./CardForm";

const ElementD = (props) => {
  return (
    <div className="DemoWrapper">
            <div className="Demo">
              <CardForm {...props}/>
            </div>
    </div>
  );
};

export default ElementD;
