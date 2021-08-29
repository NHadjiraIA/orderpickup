import React from "react";
import { Switch, BrowserRouter ,Route } from "react-router-dom";
import Home from "../pages/Home";
import {test} from "../pages/Test"
import { NotFound } from "./NotFound";
import { ROOT, TEST} from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={TEST} component={test} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};
