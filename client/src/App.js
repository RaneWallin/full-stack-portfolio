import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

export default App;
