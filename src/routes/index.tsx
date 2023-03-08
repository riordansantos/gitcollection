import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Repo } from "../pages/Repo";

export function Routes() {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Repo} path="/repositories/:repository+" />
    </Switch>
  );
}
