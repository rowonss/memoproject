import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useState} from "react";
import {useEffect} from "react";

const GetMemo = () => {

    const [title, settitle] = useState("");

    const onChangetitle = (e) => {
        settitle(e.target.value)
    }
    const [content, setcontent] = useState("");

    const onChangecontent = (e) => {
        setcontent(e.target.value)
    }

    const num = useParams();

    const [gotmemo, setgotmemo] = useState({arr:[]});

    const setting = () => {
        if(gotmemo.length > 0){
            settitle(gotmemo[0]["title"]);
            setcontent(gotmemo[0]["text"]);
        }
    }

    const getting = async () => {
        const gotmemodata = await axios.get('/GetMemo', {params:{get_num : num}
        })
        setgotmemo(gotmemodata.data)
        setting();
    }

    useEffect(() => {
        getting();
    }, [])


    return (
        <div>
            <div className="getmemobox">
                <input className="title" value={title} type="text" onChange={onChangetitle}/>
                <textarea value={content} onChange={onChangecontent}/>
                <button className="savebutton" >저장</button>
            </div>
        </div>
    )

}

export default GetMemo;