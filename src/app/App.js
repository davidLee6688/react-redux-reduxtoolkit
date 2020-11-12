import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "../features/counter/Counter";
import Book from "../features/book/Book";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/book" component={Book} />
      </Switch>
    </Router>
  );
}

export default App;
