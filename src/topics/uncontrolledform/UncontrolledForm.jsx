import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
const UncontrolledForm = () => {

    const emailRef=useRef()
    const passwordRef=useRef()
  const iconRef=useRef()
    const userData={
      email:"sundari@gmail.com",
      password:"12345"
    }
   

    const handleForm=(e)=>{
        e.preventDefault()
       const email=emailRef.current.value
       const password=passwordRef.current.value

       //! to check each field is filled with data or not
       if(!email || !password){
        //  console.log("All input fields are required")
        toast.error("All input fields are required",{position:"top-center"})
         return
       }

       //! data validation
       if(email!==userData.email || password!==userData.password){
          // console.log("Invalid credentials")
          toast.error("Invalid credentials",{position:"top-center"})
          return
       }

       toast.success("Login Successfully Done",{position:"top-center"})
       emailRef.current.value=""
       passwordRef.current.value=""
    }

    const togglePassword=()=>{
      if(passwordRef.current.type==="password"){
        passwordRef.current.type="text"
        
      }
      else{
        passwordRef.current.type="password"
      }
    }
 
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
       

        <form className='w-[300px] h-[400px] border p-5 rounded-lg shadow-lg flex flex-col gap-[30px] justify-evenly' onSubmit={handleForm}>
          <h1 className='text-center'>Login form</h1>
            <input 
            className='border-2 border-black rounded-lg outline-none p-3' 
            type="text" 
            placeholder='Email' 
            ref={emailRef}
            />
            <div className='border-2 border-black rounded-lg w-full flex items-center gap-4'>
            <input 
            className='rounded-lg outline-none p-3' 
            type="password" 
            placeholder='Password' 
            ref={passwordRef}
            />
          
            <div ref={iconRef}>
                <FiEye  onClick={togglePassword} size={50} cursor={"pointer"}/>
            </div>
            </div>

            <button className='border w-[100%] p-1 rounded-lg bg-blue-300 cursor-pointer hover:bg-blue-500'>Submit</button>

        </form>
    </div>
  )
}

export default UncontrolledForm