import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialUser = {
    id: '',
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
        case 'SET_ID': return { ...datauser, id: action.id };
        case 'SET_FIRST': return { ...datauser, name: action.firstname };
        case 'SET_LASTNAME': return { ...datauser, surname: action.lastname };
        case 'SET_PASSWORD': return { ...datauser, major: action.password };
        default: return datauser;
    }
}

const bookReducer = (datauser = initialBook, action) => {
    switch (action.type) {
        case 'SET_BOOKID': return { ...databook, id: action.id };
        case 'SET_BOOKNAME': return { ...databook, name: action.bookname };
        case 'SET_GROUP': return { ...databook, surname: action.group };
        case 'CHANGE_STATUS': return { ...databook, major: action.status };
        default: return databook;
    }
}