import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/index.js";
import { FilmsPage } from "./pages/index.js";

function App(props) {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:"#e3f2fd"}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App;
