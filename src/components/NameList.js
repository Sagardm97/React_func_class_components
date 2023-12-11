import React from 'react'

function NameList() {
const Names=['x','y','z']
const NameList=Names.map(name=><h1 >{name}</h1>)
  return (
    <div>
      {
        NameList
      }
    </div>
  )
}

export default NameList
