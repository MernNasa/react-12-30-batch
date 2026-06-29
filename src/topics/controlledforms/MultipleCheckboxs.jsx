import React, { useState } from 'react'

const MultipleCheckboxs = () => {

    const [skills,setSkills]=useState([])

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(skills)
    }

    const handleCheckbox=(e)=>{
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill !== e.target.value))
        }
    }
  return (
    <div>
        
        <form onSubmit={handleForm}>
            <label htmlFor="Skills">Skills :</label>

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="HTML" 
            />HTML

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="CSS" 
            />CSS

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="JS" 
            />JS

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="React" 
            />React

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="SQL" 
            /> SQL

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value="Node" 
            /> Node
    <br />
    <button className='bg-blue-300'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleCheckboxs