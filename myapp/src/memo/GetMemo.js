import axios from "axios";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

const GetMemo = () => {

    const num = useParams();

    const [gotmemo, setgotmemo] = useState({arr:[]});

    const getting = async () => {
        const gotmemodata = await axios.get('/GetMemo', {params:{get_num : num}
        })
        setgotmemo(gotmemodata.data)
    }

    useEffect(() => {
        getting();
    }, [])

    let title;
    let content;

    if(gotmemo.length > 0){
        title = gotmemo[0]["title"];
        content = gotmemo[0]["text"];
    }

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }

        return () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };
    };

    const deleteConfirm = () => deleteMemo()
    const cancelConfirm = () => console.log("취소했습니다")

    const confirmDelete = useConfirm(
        "삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
    );

    const deleteMemo = () => {
        axios.delete('/DeleteMemo',{params :{del_num : num}})
            .then(res => {
                console.log(res.data)
                alert("메모 삭제가 완료되었습니다.")
                document.location.href = '/MemoList'
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="getmemobox">
                <div className="viewtitle"><div>{title}</div></div>
                <div className="viewcontent"><div>{content}</div></div>
                <button className="updatebutton" >수정</button>
                <button className="deletebutton" onClick={confirmDelete} >삭제</button>
            </div>
        </div>
    )

}

export default GetMemo;