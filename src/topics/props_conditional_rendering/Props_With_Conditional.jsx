import React from 'react'
import User from './User'

const Props_With_Conditional = () => {
    let data=[
        {
            username:"sundari",
            age:23,
            email:"sundari@gmail.com",
            bike:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/hotspot/new/royal-enfield-himalayan-highlights-eu.png"
        },
        {
            username:"Mala",
            age:24,
            email:"mala@gmail.com",
            bike:null
        },
        {
            username:"Shakila",
            age:30,
            email:"shakila@gmail.com",
            bike:"https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/Screenshot%202025-11-04%20181022.jpg",
            video:"https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4"
        }
    ]
  return (
    <div>
        {
            data.map((ele)=>{
                return <User data={ele}/>
            })
        }
    </div>
  )
}

export default Props_With_Conditional