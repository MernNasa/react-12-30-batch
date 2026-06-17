import React, { useState } from 'react'

const Card = () => {
    const [cardData,setCardData]=useState({
        username:"sundari",
        age:23,
        img_url:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg"
    })
    
    const change_Image=()=>{
        const url=prompt("Enter your Image url")
        setCardData({...cardData,img_url:url})
    }
    const change_Name=()=>{
        alert(" change_Name function triggred")
    }
     const change_Age=()=>{
        alert(" change_Age function triggred")
    }


    


  return (
      <div style={{width:"300px",height:"300px",borderRadius:"10px", border:"2px solid black"}}>

        <div style={{width:"100%" , height:"55%", backgroundColor:"lightgray",backgroundImage:`url(${cardData.img_url})`,backgroundSize:"cover"}}></div>

        <h1 style={{textAlign:"center"}}>{cardData.username}</h1>
        <p style={{textAlign:"center"}}>Age : {cardData.age}</p>


        <button onClick={change_Image}>Change Image</button>

        <button onClick={change_Name}>Change Name</button>

        <button onClick={change_Age}>Change Age</button>
    </div>
  )
}

export default Card