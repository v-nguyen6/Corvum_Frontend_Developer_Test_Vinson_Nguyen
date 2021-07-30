/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState, useEffect } from 'react';
// Used to communicate with API's more easily
import axios from 'axios';

// Layouts 
import Header from "./components/layouts/Header";

// Components
import Home from "./components/components/Home";
import About from "./components/components/About";

//--------------------------------------------------------------
const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="wrapper">
          <main className="main main-page">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="*" component={Home} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
