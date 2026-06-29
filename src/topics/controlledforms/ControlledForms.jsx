import React, { useState } from 'react'

const ControlledForms = () => {
    const [form,setFrom]=useState({
        username:"",
        email:"",
        password:"",
        mobile:"",
        education:"",
        date:""
    })

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(form)
    }

    const handleInput=(e)=>{
        const {name,value}=e.target
        setFrom({...form,[name]:value})
    }
  

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        
        <form onSubmit={handleForm}>

            <input type="text" placeholder='username' className='p-3 border-2 border-black' name='username' value={form.username}  onChange={handleInput}/>
            <br />
            <input type="email" placeholder='email' className='p-3 border-2 border-black' name='email' value={form.email}  onChange={handleInput} />
            <br />
            <input type="password" placeholder='password' className='p-3 border-2 border-black' name='password' value={form.password}  onChange={handleInput} />
            <br />
            <input type="number" placeholder='mobile' className='p-3 border-2 border-black' name='mobile' value={form.mobile}  onChange={handleInput} />
            <br />
            <br />
            <select name="education" onChange={handleInput} className='border-2'>
                <option value="">select education</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MCA">MCA</option>
                <option value="BSC">BSC</option>
                <option value="BCA">BCA</option>
            </select>
            <br />
            <input type="date" name='date' value={form.date} onChange={handleInput} />
            <br />
            <button className='p-2 border-2 border-blue-300'>submit</button>
        </form>
    </div>
  )
}

export default ControlledForms