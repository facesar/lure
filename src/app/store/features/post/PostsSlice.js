import { createSlice } from '@reduxjs/toolkit';
import { name } from './name';
import initialState from '../../initialState';

const PostsSlice = createSlice({
    name,
    initialState,
    reducers: {
        postAdd: (state, action) => {
            state.push(action.payload)
        }
    },
});


export const { postAdd } = PostsSlice.actions;
export const contentPost = (state) => state.POSTS;
export default PostsSlice.reducer;
