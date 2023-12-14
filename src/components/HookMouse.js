import React, { useEffect, useState } from 'react'

function HookMouse() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logMousePosittion=e=>{
    console.log(`directions of ${x} and ${y}`)   
    setX(e.clientX) 
    setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosittion)
    })
    
  return (
    <div>
        x=={x} && y=={y}
      
    </div>
  )
}

export default HookMouse
