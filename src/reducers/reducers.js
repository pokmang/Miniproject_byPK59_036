import { combineReducers } from "redux";
import createUser from "./login";
import loginUser from "./login";
import logoutUser from "./logout";
import addBook from "./addbook";


const reducers = combineReducers({
        register: createUser,
        logIn: loginUser,
        logOut: logoutUser,
        addBook: addBook,
});

export default reducers;