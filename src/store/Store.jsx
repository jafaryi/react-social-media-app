import {configureStore} from '@reduxjs/toolkit';
import PostSlice from './slices/PostSlice.jsx'


export const Store = configureStore({
    reducer: {
        posts: PostSlice
    }
})