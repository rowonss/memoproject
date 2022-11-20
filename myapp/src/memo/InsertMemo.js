import React from "react";
import axios from "axios";



const InsertMemo = () => {

    const newMemo = () => {
        axios.post('/InsertMemo',{
            params: {
                'post_title' : title,
                'post_content' : content
            }
        })
            .then(res => {
                console.log(res.data)
                alert("글 작성이 완료되었습니다.")
                document.location.href = '/'
            })
            .catch(function(error){
                console.log(error);
            })
    }

    return (
        <div>
            <div className="memobox">
                <input className="title" type="text" name="title" placeholder="제목"/>
                <textarea name="content" placeholder="내용을 입력해주세요"/>
                <button className="savebutton" onClick={newMemo}>저장</button>
            </div>
        </div>
    )

}

export default InsertMemo