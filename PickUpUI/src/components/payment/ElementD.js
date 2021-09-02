import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import CardForm from "./CardForm";

const ElementD = ({ payments }) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="DemoWrapper">
            <div className="Demo">
              <CardForm />
            </div>
    </div>
  );
};

export default ElementD;
