import React from "react";
import { Switch, Route } from "react-router-dom";
import { Enduser } from "../pages/EndUserPage"
import { Marketers } from "../pages/MarketersPages";
import { NotFound } from "./NotFound";
import { landing } from "../pages/Landing";
import {
  ROOT,
  MAREKETER,
  ENDUSER,
} from "./CONSTANTS";

export const RouterConfig = (props) => {
  const branches = props.branches;
  const setUserName = props.setUserName;
  return (
    <Switch>
      <Route exact path={ROOT} component={landing} />
      <Route exact path={ENDUSER} component={Enduser} />
      <Route exact path={MAREKETER} component={Marketers} />
    </Switch>
  );
};

export default RouterConfig;
