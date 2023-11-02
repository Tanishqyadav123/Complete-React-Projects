import {configureStore} from '@reduxjs/toolkit'
import LikeSlice from './LikeSlice'
import NewSlice from './NewSlice';

const store = configureStore({
       reducer : {
           like : LikeSlice,
           New : NewSlice,
       }
})

export default store;