import { combineReducers } from "redux";
import createUser from "./login";
import loginUser from "./login";
import logoutUser from "./logout";


const reducers = combineReducers({
        register: createUser,
        logIn: loginUser,
        logOut: logoutUser,
});

export default reducers;