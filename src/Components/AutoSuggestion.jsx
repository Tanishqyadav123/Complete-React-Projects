import React, { useState } from 'react'

function Autosuggestions() {
 
   let arr = ["Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya"
  ]
     const [stateList , setstateList] = useState(arr)
    const [text , setText] = useState ("")


 const handleText = (event) =>{
      setText (event.target.value)
      
      
      setstateList(
         arr.filter((element) =>
            element.includes(event.target.value)
         )
      )
 }
  return (
    <>
       <div style={{display : "flex" , flexDirection : "column" , alignItems: "center" , justifyContent : "center" ,marginTop : "20px"}}>
          <label htmlFor="">Enter state name : 
          <input type="text" onChange={handleText}/>
          </label>
       
    
      {  
           stateList.map((element , index) =>{ 
            return (
               <p key={index}>{element}</p>
            )
           })
    
        }

       </div>
    </>
  )
}

export default Autosuggestions
