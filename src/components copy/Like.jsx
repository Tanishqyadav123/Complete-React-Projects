import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeGallery } from '../Store/LikeSlice'
function Like() {
  
    const LikeState = useSelector (state => state.like)
    const dispatch = useDispatch ()


    const removeFromLike = (id) =>{
        //  Dispatching the id of element which we want to delete/Remove...
       dispatch(removeGallery (id))
    }


  return (
    <div>
         <div className='container' style={{display : "flex" , alignItems : "center" , justifyContent : "center" , flexWrap : "wrap"}} >
         {/* Adding Card Components for Displaying the data */}
        {
            LikeState.map((element) =>{
                return <div style={{display : "flex" , alignItems : "center" , justifyContent : "center" }}>
                <div class="card" style= {{width: "18rem" , margin : "20px"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{element.title}</h5>
                  <p  class="card-text">{element.body}</p>
                  <button class="btn btn-danger" onClick={() => removeFromLike(element.id)}>Remove </button>
                </div>
             </div>
             </div>
            })
        }
        
    </div>
    </div>
  )
}

export default Like
