
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import MemoList from "./memo/MemoList";
import InsertMemo from "./memo/InsertMemo";
import GetMemo from "./memo/GetMemo";

function App() {

  return (
    <div className="App">
        <nav>
            <Link to="/MemoList">메모 목록</Link>
            <Link to="/InsertMemo">새 메모</Link>
        </nav>
        <Routes>
            <Route path="/MemoList" element={<MemoList />}/>
            <Route path="/InsertMemo" element={<InsertMemo />}/>
            <Route path="/GetMemo/:num" element={<GetMemo />}/>
        </Routes>
    </div>
  );
}

export default App;
