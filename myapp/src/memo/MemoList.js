import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const cutting = (String) => {
    return String.substr(0,10);
}

const Memos = ({memodata}) => {

    const getUrl = "/getMemo/"+memodata.num;

    return (
        <div className="MemoListBox_div_main" key={memodata}>
            <div className="MemoListBox_div_num">{memodata.num}</div>
            <div></div>
            <Link to={getUrl} className="MemoListBox_div_title">{memodata.title}</Link>
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