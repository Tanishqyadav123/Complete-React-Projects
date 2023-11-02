import React from 'react'
import { useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addGallery } from '../Store/LikeSlice'
import {addNew} from '../Store/NewSlice'


function Gallery() {

    const dispatch = useDispatch ()
    const [MyGallery , setMyGallery] = useState([])


      useEffect (() =>{
         fetch ('https://jsonplaceholder.typicode.com/posts')
         .then((res) => res.json())
         .then((actual) => setMyGallery(actual))
      } , [])


   const AddToLike = (element) =>{
        //  using dispatch to send the element to the Slice of Like  :-
        dispatch(addGallery(element))
   }
  
   const AddToNew = (element) =>{
       //  using dispatch to send the element to the slice of New :-
       dispatch(addNew(element))
   }

  return (
    <div className='container' style={{display : "flex" , alignItems : "center" , justifyContent : "center" , flexWrap : "wrap"}} >
         {/* Adding Card Components for Displaying the data */}
        {
            MyGallery.map((element) =>{
                return <div style={{display : "flex" , alignItems : "center" , justifyContent : "center" }}>
                <div class="card" style= {{width: "18rem" , margin : "20px"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{element.title}</h5>
                  <p  class="card-text">{element.body}</p>
                  <button class="btn btn-primary m-3" onClick={() => AddToLike(element)}>AddLike</button>
                  <button class="btn btn-primary" onClick={() => AddToNew(element)}>AddNew</button>
                </div>
             </div>
             </div>
            })
        }
        
    </div>
  )
}

export default Gallery
