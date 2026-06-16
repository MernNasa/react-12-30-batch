import { useState } from "react"
import Child from "./Child"

const UseStateHook=()=>{
        
           const [count,setCount]= useState(0)
           
            const updateCount=()=>{
                setCount(count+1)
            }
           console.log("parent component")
    return(
        <div>
            <h1>UseStateHook</h1>
            <h1>{count}</h1>
            <Child/>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}
export default UseStateHook