import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DentalService from './components/DentalService/DentalService';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoFound from './components/NoFound/NoFound';

function App() {
  return (


    <Router>

      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/dentalService">
          <DentalService></DentalService>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoFound></NoFound>
        </Route>

      </Switch>

    </Router>


  );
}

export default App;
