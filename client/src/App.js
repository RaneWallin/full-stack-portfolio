import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AppWrapper>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
        </div>
      </Router>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
