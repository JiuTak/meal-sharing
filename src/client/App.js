import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>This is the main page</p>
      </Route>
      <Route exact path="/about">
        <p>This is the about page</p>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
