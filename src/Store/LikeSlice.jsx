import {createSlice} from '@reduxjs/toolkit'

const initialState = []
const LikeSlice = createSlice({
     name : "Liked",
     initialState,
     reducers : {
         addGallery (state , action) {
            state.push(action.payload)
         },
         removeGallery (state , action) {
             return state.filter((element) => element.id != action.payload)
         }
     }
})

export const {addGallery , removeGallery} = LikeSlice.actions
export default LikeSlice.reducer
