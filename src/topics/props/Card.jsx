const Card=(props)=>{
    console.log(props) // {user:{username:"sundari"}}
    return(
        <div>
            <h1>My name is {props.user.username}</h1>
            <h2>My Age is {props.user.age}</h2>
        </div>
    )
}
export default Card