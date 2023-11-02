import {createSlice} from '@reduxjs/toolkit'

const initialState = [];
const NewSlice = createSlice ({
     name  : "Newed",
     initialState,
     reducers : {
         addNew (state , action) {
            state.push(action.payload)
         },
         removeNew (state , action) {
            return state.filter((state) => state.id !== action.payload)
         }
     },
})

export const {addNew , removeNew} = NewSlice.actions
export default NewSlice.reducer