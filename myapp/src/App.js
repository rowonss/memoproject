
import React, {useEffect} from "react";
import axios from "axios";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./memo/Home";
import About from "./memo/About";
import Counter from "./memo/Counter";
import Input from "./memo/Input";
import Input2 from "./memo/Input2";
import Exp from "./memo/Exp";
import UserList from "./memo/List";
import InsertMemo from "./memo/InsertMemo";


function App() {

    // 서버에서 받은 데이터를 console로 찍어서 확인한다.
    const selectAll = () => {
        alert("selectAll")
        axios.get('/movie')
    }

  return (

    <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/Input">Input</Link>
            <Link to="/Input2">Input2</Link>
            <Link to="/Exp">Exp</Link>
            <Link to="/UserList">UserList</Link>
            <Link to="/InsertMemo">InsertMemo</Link>
            <button onClick={selectAll}></button>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/Counter" element={<Counter />}/>
            <Route path="/Input" element={<Input />}/>
            <Route path="/Input2" element={<Input2 />}/>
            <Route path="/Exp" element={<Exp />}/>
            <Route path="/UserList" element={<UserList />}/>
            <Route path="/InsertMemo" element={<InsertMemo />}/>
        </Routes>
    </div>
  );
}

export default App;
