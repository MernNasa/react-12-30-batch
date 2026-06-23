import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { GlobalContext } from './Use_Context_Api'

const Child = () => {
    const reslut=useContext(GlobalContext)
    console.log(reslut)
  return (
    <div>
        <GrandChild/>
    </div>
  )
}

export default Child