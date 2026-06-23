import React, { useContext } from 'react'
import Child from './Child'
import { GlobalContext } from './Use_Context_Api'

const Parent = () => {

   const result= useContext(GlobalContext)
   console.log(result)
   
  return (
    <div>
        <Child/>
    </div>
  )
}

export default Parent