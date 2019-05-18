import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Helmet bodyAttributes={{ class: "grey lighten-2" }} />
      <div>
        <div className="deep-purple darken-4">
          <Header />
        </div>
        <div className="container">
          <Router>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/Dashboard" component={Dashboard} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
