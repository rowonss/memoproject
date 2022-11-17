import React, {useState} from "react";

const Exp = () => {
    const [numbers, setNumbers] = useState(0);

    const plusNumber = () => {
        setNumbers((num)=> num + 1);
        setNumbers((num)=> num + 1);
        setNumbers((num)=> num + 1);
    }

    return(
        <div>
            <p>{numbers}</p>
            <button onClick={plusNumber}>+3</button>
        </div>
    )
}

export default Exp;