import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const Memos = ({memodata}) => {
    return (
        <tr>
            <td>{memodata.num}</td>
            <td>{memodata.title}</td>
            <td>{memodata.text}</td>
            <td>{memodata.date}</td>
        </tr>
    )
}


const UserList = () => {

    const [memo,setmemo] = useState({arr:[]});

    useEffect(()=>{
        setmemo({arr: []})
    }, [])

    const selectAll = async () => {
        //데이터가 전부 들어올 때까지 기다린다 - 비동기
        let memodata = (await axios.get('/MEMO')).data

        setmemo({arr:memodata})

    }



    return (
        <table>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
            {memo.arr.map(memo => <Memos memodata={memo}/>)}
            </tbody>
        </table>
    )
}

export default UserList;