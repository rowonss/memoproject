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

    const pagelimit = 6;

    const [remainpage, setremainpage] = useState(0)

    const [memo, setmemo] = useState({arr: []});

    const pagenation = (arr) => {
        let pageArray = [];
        let Array = [];
        arr.map(memodata => {
            Array.push(memodata);
            if(Array.length === pagelimit){
                pageArray.push(Array);
                Array = [];
            }
        })
        if(Array.length > 0){
            pageArray.push(Array)
        }

        return pageArray;
    }

    const usedata = async () => {
        let memodata = pagenation((await (axios.get('/MEMO'))).data)
        setmemo({arr:memodata})
    }

    useEffect(() => {
        usedata();
    }, [])

    const increaseRemainpage = () => {
        if(remainpage === memo.arr.length-1){
            return alert("마지막페이지 입니다");
        }
        setremainpage(remainpage+1)
    }
    const decreaseRemainpage = () => {
        if(remainpage === 0){
            return alert("가장 첫 페이지 입니다");
        }
        setremainpage(remainpage-1)
    }

    if(memo.arr.length > 0){

        return (
            <div className="MemoListBox">
                <ul>
                    <li>{memo.arr[remainpage].map(memo => <Memos memodata={memo}/>)}</li>
                </ul>
                <div className="pagenation_button_box">
                    <button className="pagenation_button" onClick={decreaseRemainpage}>이전 페이지</button>
                    <p className="pagenation_remainpage">{remainpage+1}</p>
                    <button className="pagenation_button" onClick={increaseRemainpage}>다음 페이지</button>
                </div>
            </div>
        )
    }

}

export default MemoList;