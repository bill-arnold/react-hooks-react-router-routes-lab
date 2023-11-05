import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/movies" element={<Movies />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/" element={<Home />} />
      </div>
    </Router>
  );
}

export default App;
