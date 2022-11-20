
import React, {useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./memo/Home";
import About from "./memo/About";
import Counter from "./memo/Counter";
import Input from "./memo/Input";
import Input2 from "./memo/Input2";
import Exp from "./memo/Exp";
import MemoList from "./memo/MemoList";
import InsertMemo from "./memo/InsertMemo";

function App() {

  return (

    <div className="App">
        <nav>
            <Link to="/MemoList">메모 목록</Link>
            <Link to="/InsertMemo">새 메모</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/Counter" element={<Counter />}/>
            <Route path="/Input" element={<Input />}/>
            <Route path="/Input2" element={<Input2 />}/>
            <Route path="/Exp" element={<Exp />}/>
            <Route path="/MemoList" element={<MemoList />}/>
            <Route path="/InsertMemo" element={<InsertMemo />}/>
        </Routes>
    </div>
  );
}

export default App;
