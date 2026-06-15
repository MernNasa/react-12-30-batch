const Jsx_Rules=()=>{
        // we can write all js code
        let username="sundari"

        if(false){
            console.log("true block")
        }
        else{
            console.log("false block")
        }
        let theme=true

        let arr=["sheela","leela","mala","shakila","urimal","madhubala","sharmila","sushila"]

    return (
        <div>
            {
                // jsx expression 
                // we can access the js  but we cant create the js 

                // Rules
                // 1. We can't declare js variables but we can access it
                // let remo="hii"
                // 2.we can't use conditional statements like if , if-else,else-if,switch
                
                // if(){}

                //3. we can't use loops like for, while, do-while,for-in,for-of

            }

            <h1>Hello {username}</h1>

            <button>{theme?"light":"Dark"}</button>

            <ol>
                {
                    arr.map((ele)=>{
                        return <li>{ele}</li>
                    })
                }
            </ol>
        </div>
    )
}
export default Jsx_Rules