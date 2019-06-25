import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./Order";
import Sidebar from "./Sidebar";
import Dashboard from './Dashboard';
import Home from './Home'


function PrivateRoute() {
  return (
    <>
      <Sidebar />
      <Route exact path='/order' component={Dashboard}></Route>
      <Route exact path='/order/:id' component={Order}></Route>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path="/order" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
