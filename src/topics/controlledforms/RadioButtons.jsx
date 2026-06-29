import React, { useState } from 'react'

const RadioButtons = () => {
    const [gender,setGender]=useState("Others")

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(gender)
    }
    const handleInput=(e)=>{
        const {name,value}=e.target 
        setGender(value)
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input 
            type="radio" 
            name='gender' 
            value="Male"
            checked={gender==="Male"}
            onChange={handleInput} /> Male

            <input 
            type="radio"
            name='gender'
            value="Female"
            checked={gender==="Female"}
            onChange={handleInput} /> Female

            <input 
            type="radio" 
            name='gender' 
            value="Others"
            checked={gender==="Others"} 
            onChange={handleInput}  /> Others
            <br />
            <button className='bg-blue-200'>Submit</button>
        </form>
    </div>
  )
}

export default RadioButtons