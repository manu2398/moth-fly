import React from 'react';
import Logo from './Moth_logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Articles from './Articles';

function App() {
  return (
    <div className="app">
      <div className="app__navbar">
        <img src={Logo} alt="MOTH" />
      </div>
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/category/:categoryName">
              <Articles />
            </Route>
            <Route path="/">
              <Articles />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
