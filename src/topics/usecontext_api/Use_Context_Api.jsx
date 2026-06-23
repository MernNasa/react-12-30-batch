import React, { createContext } from 'react'
import Parent from './Parent'


export const GlobalContext=createContext()

const Use_Context_Api = () => {

    const data={
        username:"sundari",
        age:23,
        gender:"female",
        education:"B.Tech",
        palce:"AP",
        college:"JNTU Anatapuram",
        batch:"2024",
    }
  return (
    <div>
        <GlobalContext value={data}>
             <Parent/>
        </GlobalContext>

       
    </div>
  )
}

export default Use_Context_Api