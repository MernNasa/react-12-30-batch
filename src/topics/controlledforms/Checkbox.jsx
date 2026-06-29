import React, { useState } from 'react'

const Checkbox = () => {
    const[terms,setTerms]=useState(false)

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(terms)
    }

    const handleInput=(e)=>{ 
        setTerms(e.target.checked)
    }

  return (
    <div>
        
        <form onSubmit={handleForm}>
                <input 
                type="checkbox" 
                name="terms"
                checked={terms}
                onChange={handleInput}
                />
                 
                Terms And Conditions
                <br />
                <button className='bg-blue-300'>Submit</button>
        </form>
    </div>
  )
}

export default Checkbox