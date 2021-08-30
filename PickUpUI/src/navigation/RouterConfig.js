import React from "react";
import { Switch, BrowserRouter ,Route } from "react-router-dom";
import Home from "../pages/Home";
import {dish} from "../pages/Dish";
import { NotFound } from "./NotFound";
import { ROOT, DISH} from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DISH} component={dish}/>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};
