import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./App.css";
import { HomePage } from "./pages/index.js";
import { FilmsPage } from "./pages/index.js";

function App(props) {

  //const { pathname } = useLocation();
  //console.log(pathname)

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link color-white" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link color-white"  to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/films" element={<FilmsPage></FilmsPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App;
