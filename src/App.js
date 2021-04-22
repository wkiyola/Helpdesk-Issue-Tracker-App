import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import Home from './layout/Home';
import AllKis from './components/Ki'
import Nav from './layout/Nav'


const App = () => {
    return (
        <Router>
            <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/ki" component={AllKis}/>
          </Switch>
      </Router>
    )
};

export default App
