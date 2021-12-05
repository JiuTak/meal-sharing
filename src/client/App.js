import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
// import meals

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>This is the main page</p>
        </Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/meals" component={Meals}></Route>
      </Switch>
    </Router>
  );
}

export default App;
