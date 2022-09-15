import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/index.js";
import { FilmsPage } from "./pages/index.js";

return (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="films">Films</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
  </BrowserRouter>
);
export default App;
