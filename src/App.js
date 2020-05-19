import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Paises from './componentes/paises'
import About from './about'
import Home from './home'

class App extends Component {

  render() {

 
    return (
          <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">Acerca de mi</Link>
                </li>
                <li>
                  <Link to="/paises">Paises</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/paises" exact>
                <Paises />
              </Route>
              <Route path="/" exact >
                <Home />
              </Route>
              <Route path="/about" >
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  };
}

export default App;
