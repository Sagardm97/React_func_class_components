import React, { useState } from 'react'

function HookCounterThree() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <div><input type="text" value={name.firstName} onChange={e=>setName
        ({...name,firstName:e.target.value})}/></div>
        <div><input type="text" value={name.lastName} onChange={e=>setName
        ({...name,lastName:e.target.value})}/></div>
        <h1>enter your first name :{name.firstName}</h1>
        <h1>enter your last name :{name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
      
    </div>
  )
}

export default HookCounterThree
