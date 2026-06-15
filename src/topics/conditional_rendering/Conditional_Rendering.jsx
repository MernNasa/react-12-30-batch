const Conditional_Rendering=()=>{
    //! conditional rendering 
        // 1. ternary operator (condition ? true : false)
        // 2. short circuit logical AND (condition && true)
        // 3. nullish operator ( null || undefiend ?? true)
        // 4. optional chaining (?)
        // 5. short circuit logical OR ( variable = true || default value)

        let status={}
        let data=[]

        let value=""
        let res= value || 
        console.log(res)
    return (
        <div>
            {/* {
                status === true ? <h1>😀 happy</h1> : <h1>😔😔 sad</h1>
            } */}
            {
                status && <h1>Hello</h1>
            }
            {/* {
                status ?? <h1>Bye</h1>
            } */}
            {
                data?.map(()=>{
                    return <h1>hii</h1>
                })
            }
            <h1>another statement</h1>
        </div>
    )
}
export default Conditional_Rendering