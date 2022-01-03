import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import NavBar from "./components/NavBar";
import MealsDetail from "./components/MealsDetail";
import ToggleNavBar from "./components/ToggleNavBar";
import ShareMealForm from "./Forms/ShareMealForm"

function App() {
  const [isActiveNav, setIsActiveNav] = useState(true);
  const navbarActive = () => {
    setIsActiveNav(!isActiveNav);
  };

  return (
    <Router>
      <NavBar navbarActive={navbarActive} />
      {!isActiveNav && <ToggleNavBar navbarActive={navbarActive} />}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/meals" component={Meals}></Route>
        <Route exact path="/meals/:id" component={MealsDetail}></Route>
        <Route exact path="/sharing" component={ShareMealForm}></Route>
      </Switch>
    </Router>
  );
}

export default App;
