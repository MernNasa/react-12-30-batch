import React, { useState } from 'react'
import Card from './Card'

const UseStateHookTask = () => {
    const [data,setData]=useState(null)
    setTimeout(()=>{
      setData(true)
    },5000)
  return (
    <div>
        {
          !data ? <h1>Loading......</h1>: <div>data</div>
        }
        
    </div>
  )
}

export default UseStateHookTask