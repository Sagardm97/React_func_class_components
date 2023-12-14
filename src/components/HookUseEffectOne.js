import React, { useEffect, useState } from 'react'

function HookUseEffectOne() {
    const[count ,setCount]=useState(0)
    useEffect(()=>{
        document.title=`clicked ${count} times`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click-here : {count}</button>
      
    </div>
  )
}

export default HookUseEffectOne
