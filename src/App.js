import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Code from "./pages/Code/Code";

function App() {
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
            <Link to="/code">code</Link>
          </li>
          <li className="nav-item nav-sub-item">
            <Link to="/photos">photos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    // <Router>
    //   <nav>
    //     <ul>
    //       <li className="home nav-item">
    //         <Link to="/">snb.</Link>
    //       </li>
    //       <li className="nav-item nav-sub-item">
    //         <Link to="/about">about</Link>
    //       </li>
    //       <li className="nav-item nav-sub-item">
    //         <Link href="/code">code</Link>
    //       </li>
    //       <li className="nav-item nav-sub-item">
    //         <Link href="/photos">photos</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Switch>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/">
    //       <HomePage />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
