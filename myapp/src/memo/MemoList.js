import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const cutting = (String) => {
    return String.substr(0,10);
}

const Memos = ({memodata}) => {
    return (
        <div className="MemoListBox_div_main" key={memodata}>
            <div className="MemoListBox_div_num">{memodata.num}</div>
            <div></div>
            <div className="MemoListBox_div_title">{memodata.title}</div>
            <div></div>
            <div className="MemoListBox_div_date">{cutting(memodata.date)}</div>
        </div>
    )
}
const MemoList = () => {

    const [memo, setmemo] = useState({arr: []});

    const usedata = async () => {

        let memodata = (await axios.get('/MEMO')).data
        setmemo({arr: memodata})

        return memo
    }

    useEffect(() => {
        usedata();
    }, [])

    return (
        <div className="MemoListBox">
            <ul>
                <li>{memo.arr.map(memo => <Memos memodata={memo}/>)}</li>
            </ul>
        </div>
    )
}

export default MemoList;