import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const initialUser = {
    userid: '',
    firstname: '',
    lastname: '',
    password: ''
}

const initialBook = {
    bookid: '',
    bookname: '',
    group: '',
    status: ''
       
}

const userReducer = (datauser = initialUser, action) => {
    switch (action.type) {
        case 'SET_USERID': return { ...datauser, userid: action.userid };
        case 'SET_FIRSTNAME': return { ...datauser, firstname: action.firstname };
        case 'SET_LASTNAME': return { ...datauser, lastname: action.lastname };
        case 'SET_PASSWORD': return { ...datauser, password: action.password };
        default: return datauser;
    }
}

const bookReducer = (databook = initialBook, action) => {
    switch (action.type) {
        case 'SET_BOOKID': return { ...databook, bookid: action.bookid };
        case 'SET_BOOKNAME': return { ...databook, name: action.bookname };
        case 'SET_GROUP': return { ...databook, group: action.group };
        case 'CHANGE_STATUS': return { ...databook, status: action.status };
        default: return databook;
    }
}

const useractionReducer = (users = [], action) => {
    switch (action.type) {
       
        case 'ADD_USER': return [...users, action.user];
        default: return users
    }
}




export const allAction = {
    set_userid: (userid) => ({ type : 'SET_USERID' , userid }),
    set_firstname: (firstname) => ({ type : 'SET_FIRSTNAME' , firstname }),
    set_lastname: (lastname) => ({ type : 'SET_LASTNAME' , lastname }),
    set_password: (password) => ({ type : 'SET_PASSWORD' , password }),
    set_bookid: (bookid) => ({ type : 'SET_BOOKID' , bookid }),
    set_bookname: (bookname) => ({ type : 'SET_BOOKNAME' , bookname }),
    set_group: (group) => ({ type : 'SET_GROUP' , group }),
    set_status: (status) => ({ type : 'CHANGE_STATUS' , status }),
    add_user: (user) => ({ type : 'ADD_USER' , user })
}

const reducers = combineReducers({
    user: userReducer,
    book: bookReducer

})

export const store = createStore(reducers, applyMiddleware(logger, thunk));
