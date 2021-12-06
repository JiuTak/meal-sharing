import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import NavBar from "./components/NavBar";
import MealsDetail from "./components/MealsDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/meals" component={Meals}></Route>
        <Route exact path="/meals/:id" component={MealsDetail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
