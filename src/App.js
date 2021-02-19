import React from "react";
import { CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Fonts from "./components/Fonts";
import InsLanding from "./pages/insurance/InsLanding";
import HomeLanding from "./pages/home/HomeLanding";
import FinLanding from "./pages/finance/FinLanding";
import ClaimLanding from "./pages/claim/ClaimLanding";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Fonts />
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home`}
          component={HomeLanding}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/insurance`}
          component={InsLanding}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/finance`}
          component={FinLanding}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/claim`}
          component={ClaimLanding}
        />
        {/* Redirect all 404 to Home */}
        <Redirect to={`${process.env.PUBLIC_URL}/finance`} />
      </Switch>
    </Router>
  );
}

export default App;
