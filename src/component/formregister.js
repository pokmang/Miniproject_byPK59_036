import React, { useState, useEffect } from 'react'
// import {Redirect} from "react-router-dom" ;
import { useDispatch, useSelector } from 'react-redux' ;
import { Link, withRouter } from "react-router-dom" ;

import { createUser } from "../actions/register"
import styled from "styled-components"

const StyledWrapper = styled.div`
@media only screen and (min-width: 769px) {

    background-image: url('https://i.imgur.com/zceQljC.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .box{
        display: flex;
        flex-direction: column;
        align-item :center ;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        padding-top: 200px;
        padding-left: 10px;
        

      }

    .input{
       margin: 0px 550px 0px 550px;
    }
  }
  .bnt{
    margin: 10px 550px 0px 550px;
  }




`

const RegisterForm = (props) => {

    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const createUserAction = (email ,password ,firstname ,lastname) => dispatch(createUser(email, password, firstname, firstname));

    useEffect(()=>{
        checkLogin()
    },[])
    const checkLogin = ()=>{
        let email = localStorage.getItem('email')
        if(email==null) props.history.push('/register')
        else props.history.push('/booklist')
    }
    const register = async (e) =>{
        e.preventDefault();

        if(email !== "" && password !== "" && firstname !== "" && lastname !== ""){
            await createUserAction(email, password, firstname,lastname);
            alert('Register Success')
            props.history.push('/')
        }else{
            console.log("need to fill the credenttials");;
            
        }
    }



    return (
        <React.Fragment>
            <StyledWrapper>
            <form onSubmit={register}>
                <div className="box">
                <h4>ห้องสมุดโรงเรียนดรุณศาสน์วิทยา</h4>
                <h6>ลงทะเบียน</h6>
                <p>Firstname:</p>
                <input className="input" type="firstname" name="firstname" onChange={(e) => setfirstName(e.target.value)} />
                <p>Lastname:</p>
                <input className="input" type="lastname" name="lastname" onChange={(e) => setlastName(e.target.value)} />
                <p>Email:</p>
                <input className="input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <small id="emailHelp" class="form-text text-muted">emai@darun.ac.th</small>
                <p>password:</p>
                <input className="input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <small id="emailHelp" class="form-text text-muted">รหัสผ่านต้องมีตัวอักษรและตัวเลข เช่น abc123</small>
               <div className="bnt" >
                    <button type="submit" class="btn btn-primary">create account</button>
                <Link to="/">login</Link>
               </div>
               
              
                </div>
                
           
                    </form>
        
            </StyledWrapper>
        </React.Fragment>
    )
}

export default RegisterForm;