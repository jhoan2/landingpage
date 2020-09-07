import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Citylife from '../Citylife';
import Food from '../Food';
import Nature from '../Nature';
import Home from '../Home';
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="ulnavbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/citylife">City Life</Link>
            </li>
            <li>
              <Link to="/Food">Food</Link>
            </li>
            <li>
              <Link to="/Nature">Nature</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/citylife">
            <Citylife />
          </Route>
          <Route path="/Nature">
            <Nature />
          </Route>
          <Route path="/Food">
            <Food />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





