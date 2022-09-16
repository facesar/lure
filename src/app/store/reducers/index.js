import { combineReducers } from "redux";
import PostsSlice from "../features/post/PostsSlice";

const reducers = combineReducers({
    POSTS: PostsSlice,
});

export default reducers;