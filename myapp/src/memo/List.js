import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const Memos = ({memodata}) => {
    return (
        <tr>
            <td>{memodata.title}</td>
            <td>{memodata.date}</td>
        </tr>
    )
}
const UserList = () => {

    const [memo,setmemo] = useState({arr:[]});

    const usedata = async () => {

        let memodata = (await axios.get('/MEMO')).data
        setmemo({arr:memodata})

        return memo
    }

    useEffect(() => {
        usedata();
    },[])

    return (
        <table>
            <thead>
            <tr>
                <th>제목</th>
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