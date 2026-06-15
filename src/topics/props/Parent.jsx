import Child from "./Child"

const Parent=()=>{
    const data=["sundari","sheela","leela"]
    return(
        <div>
            <Child name="sundari" />
            <Child name="sheela" />
            <Child name="Mala" />
            <Child  />
        </div>
    )
}
export default Parent