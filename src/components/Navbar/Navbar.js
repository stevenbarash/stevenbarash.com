import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../pages/About/About";
import HomePage from "../../pages/HomePage/HomePage";
export default function Navbar() {
  return (
    <Router>
      <nav>
        <ul>
          <li className="home nav-item">
            <Link to="/">snb.</Link>
          </li>
          <li className="nav-item nav-sub-item">
            <Link to="/about">about</Link>
          </li>
          <li className="nav-item nav-sub-item">
            <Link href="/code">code</Link>
          </li>
          <li className="nav-item nav-sub-item">
            <Link href="/photos">photos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
