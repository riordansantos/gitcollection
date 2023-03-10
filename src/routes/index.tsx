import React from "react";
import { Switch, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunckName: "dashboard" */
  "../pages/Dashboard"));
const Repo = React.lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunckName: "repo" */
  "../pages/Repo"));

export function Routes() {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </React.Suspense>
  );
}
