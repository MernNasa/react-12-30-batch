import Card from "./Card"


const PropsTask=()=>{
    const data=[
        {
            username:"sundari",
            age:23,
            gender:"female",
            email:"sundari@gmail.com",
            img:""
        },
        {
            username:"leela",
            age:23,
            gender:"female",
            email:"leela@gmail.com",
            img:""
        },
        {
            username:"mala",
            age:23,
            gender:"female",
            email:"mala@gmail.com",
            img:""
        },
        {
            username:"mala",
            age:23,
            gender:"female",
            email:"mala@gmail.com",
            img:""
        }
    ]

    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
    return(
        <div>
            <h1>Props Task</h1>
            {/* {
                data.map((ele)=>{
                    return <Card user={ele}/>
                })
            } */}
            <table border="1" cellSpacing={0} cellPadding={20}>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Age</th>
                </tr>
                {
                    data.map((ele,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{ele.username}</td>
                            <td>{ele.age}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
export default PropsTask