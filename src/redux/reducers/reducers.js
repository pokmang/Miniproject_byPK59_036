import { combineReducers } from "redux";
import createUser from "./login";
import loginUser from "./login";
import logoutUser from "./logout";
import getPosts from "./getPosts"



const reducers = combineReducers({
        register: createUser,
        logIn: loginUser,
        logOut: logoutUser,
        post : getPosts,

});

export default reducers;