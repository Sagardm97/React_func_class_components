import React, { useReducer } from 'react'

const intialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return intialState;
        default:
            return state;
    }
}

function HookDispatch() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <h1>count : {state}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}

export default HookDispatch
