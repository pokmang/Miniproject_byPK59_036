import React from 'react';
import './App.css';
import Nav from "./component/nav" ;
import { Provider } from 'react-redux';
import store from "./store/store" ;
// import LoginFrom from './component/formlogin';
import Routes from './routes';



function App() {
  return (
    <Provider store ={store} >
      <div className="App">
      <Nav/>
      <Routes/>
      
      </div>
    </Provider>
  );
}

export default App;