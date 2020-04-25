import { combineReducers } from "redux";
import createUser from "./login";
import loginUser from "./login";
import logoutUser from "./logout";
import addBook from "./addbook";
import getPosts from "./getPosts"
import deletePost from "./deletePost";


const reducers = combineReducers({
        register: createUser,
        logIn: loginUser,
        logOut: logoutUser,
        addBook: addBook,
        post : getPosts,
        delete: deletePost,
});

export default reducers;