import React from "react";
import axios from "axios";
import {useState} from "react";
import 'url-search-params-polyfill';

const InsertMemo = () => {

    const [title, settitle] = useState("");

    const onChangetitle = (e) => {
        settitle(e.target.value)
    }
    const [content, setcontent] = useState("");

    const onChangecontent = (e) => {
        setcontent(e.target.value)
    }


    const newMemo = () => {
        axios.post('/Insert', null, {params:{post_title:title,post_content:content}})
            .then(res => {
                console.log(res.data)
                alert("글 작성이 완료되었습니다.")
                document.location.href = '/'
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="memobox">
                <input className="title" type="text" placeholder="제목" onChange={onChangetitle}/>
                <textarea placeholder="내용을 입력해주세요" onChange={onChangecontent}/>
                <button className="savebutton" onClick={newMemo}>저장</button>
            </div>
            <p>{title}</p>
        </div>
    )

}

export default InsertMemo