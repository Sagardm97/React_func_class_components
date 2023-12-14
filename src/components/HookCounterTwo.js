import React, { useState } from "react";

function HoookCounterTwo() {
    const intialCount = 0
    const [count, setCount] = useState(intialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }

    }
    return (
        <div>
            <h1>{count}</h1>
            <div> <button onClick={() =>setCount(prevState=>prevState+1)}>Increment </button></div>

            <div><button onClick={() => setCount(prevState=>prevState-1)}>Decrement</button></div>
            <div><button onClick={() => setCount(intialCount)}>Reset </button></div>
            <div><button onClick={incrementFive}>IncrementFive:</button></div>

        </div>
    )
}

export default HoookCounterTwo