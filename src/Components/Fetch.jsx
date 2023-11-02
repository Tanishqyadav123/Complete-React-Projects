import React, { useCallback, useEffect, useState } from 'react'

function Fetch() {
    
    const [dataArr , setDataArr] = useState([])
    const [currentVal , setCurrentVal] = useState({})
    useEffect(() =>{ 
        getData ()
    } , [])
    const getData =  async () =>{
        await fetch ("https://jsonplaceholder.typicode.com/todos/1/posts")
        .then((raw)=> raw.json())
        .then((actual) => setDataArr(actual))
    }

 const handleData = (e)=>{
    console.log(e.target.value)
    fetch (`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
    .then((raw)=> raw.json())
    .then((actual) => setCurrentVal(actual))
     
 }
  return (
     <>
       {
        <select name="" id="" onChange={handleData}>
        
       { dataArr.map((element , index) =>{
             return <option value={element.id}>{element.id}</option>
           
        })}
        </select>
       }

<table className="table">
  <thead>
    <tr>
      <th scope="col">UserID</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{currentVal.userId}</th>
      <td>{currentVal.id}</td>
      <td>{currentVal.title}</td>
      <td>{currentVal.body}</td>
    </tr>
   
  </tbody>
</table>
     </>
   
  )
}

export default Fetch
