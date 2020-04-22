import React, { useState } from 'react'
// import {Redirect} from "react-router-dom" ;
import { useDispatch, useSelector } from 'react-redux' ;
import { Link, withRouter } from "react-router-dom" ;

import { createUser } from "../actions/register"
import styled from "styled-components"

const StyledWrapper = styled.div`

    background: #006699 url('https://i.imgur.com/zceQljC.jpg') no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    .box{
        display: flex;
        flex-direction: column;
        align-item :center ;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        padding-top: 240px;
        padding-left: 10px;
        

      }
    .input{
        margin-left: 700px;
        padding-left: 10px;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        margin-top: 4px;
    }

`

const RegisterForm = () => {

    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // const [routeRedirect , setRedirect ] = useState("tr");
    const dispatch = useDispatch();
    const createUserAction = (email ,password ,firstname ,lastname) => dispatch(createUser(email, password, firstname, lastname));


    const register = async (e) =>{
        e.preventDefault();
      //  console.log("user created");
        if(email !== "" && password !== "" && firstname !== "" && lastname !== ""){
            await createUserAction(email, password, firstname,lastname);
             // 
        }else{
            console.log("need to fill the credenttials");;
            
        }
    }

    // const redirectTo = routeRedirect;
    // if(redirectTo){
    //     return <Redirect to= "/" />
    // }
    

    return (
        <React.Fragment>
            <StyledWrapper>
            <form onSubmit={register}>
                <div className="box">
                <h3>ห้องสมุดโรงเรียนดรุณศาสน์วิทยา</h3>
                <p>ลงทะเบียน</p>
                <p>Firstname:</p>
                <input className="input" type="firstname" name="firstname" onChange={(e) => setfirstName(e.target.value)} />
                <p>Lastname:</p>
                <input className="input" type="lastname" name="lastname" onChange={(e) => setlastName(e.target.value)} />
                <p>Email:</p>
                <input className="input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <p>password:</p>
                <input className="input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <input className="input" type="submit" value="create account"/>
                <spen><Link to="/login">login</Link></spen>
                </div>
                
                
            </form>
            </StyledWrapper>
        </React.Fragment>
    )
}

export default RegisterForm;