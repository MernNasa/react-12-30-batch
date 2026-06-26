import React, { useState } from 'react'

const ControlledForms = () => {

    const [username,setUserName]=useState("")

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(username)
    }

    const handleInput=(e)=>{
        const {value}=e.target 
        setUserName(value) 
    }

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        
        <form onSubmit={handleForm}>

            <input type="text" placeholder='username' className='p-3 border-2 border-black' onChange={handleInput} value={username} />

            <br />
            <button className='p-2 border-2 border-blue-300'>submit</button>
        </form>
    </div>
  )
}

export default ControlledForms