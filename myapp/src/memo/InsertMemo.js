import React from "react";

const InsertMemo = () => {

    return (
        <div>
            <div className="memobox">
                <input className="title" type="text" name="title" placeholder="제목"/>
                <textarea name="main" placeholder="내용을 입력해주세요"/>
                <button className="savebutton" onClick={console.log}>저장</button>
            </div>
        </div>
    )

}

export default InsertMemo