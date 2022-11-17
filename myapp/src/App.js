
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./memo/Home";
import About from "./memo/About";
import Counter from "./memo/Counter";
import Input from "./memo/Input";
import Input2 from "./memo/Input2";

function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/Input">Input</Link>
            <Link to="/Input2">Input2</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/Counter" element={<Counter />}/>
            <Route path="/Input" element={<Input />}/>
            <Route path="/Input2" element={<Input2 />}/>
        </Routes>
    </div>
  );
}

export default App;
