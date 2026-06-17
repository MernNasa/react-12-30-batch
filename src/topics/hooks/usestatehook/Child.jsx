import React, { useState } from 'react'

const Child = () => {
    const [val,setval]=useState(100)
    const updateVal=()=>{
        setval(val+1)
    }
    console.log("child component")
  return (
    <div>
        <h1>Child</h1>
        <h2>{val}</h2>
        <button onClick={updateVal}>Update val</button>
    </div>
  )
}

export default Child