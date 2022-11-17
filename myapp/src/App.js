
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./memo/Home";
import About from "./memo/About";
import Counter from "./memo/Counter";

function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/Counter">Counter</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/Counter" element={<Counter />}/>
        </Routes>
    </div>
  );
}

export default App;
