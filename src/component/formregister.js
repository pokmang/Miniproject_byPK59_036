import React, { useState } from 'react'
// import {Redirect} from "react-router-dom" ;
import { useDispatch, useSelector } from 'react-redux' ;


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
        padding-top: 200px;

      }
    .input{
        margin-left: 700px;
        padding-left: 5px;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        margin-top: 10px;
    }

`

const RegisterForm = () => {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [routeRedirect , setRedirect ] = useState("tr");
    const dispatch = useDispatch();
    const createUserAction = (email ,password) => dispatch(createUser(email, password));


    const register = async (e) =>{
        e.preventDefault();
      //  console.log("user created");
        if(email !== "" && password !== ""){
            await createUserAction(email, password);
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
                <h2>ห้องสมุดโรงเรียนดรุณศาสน์วิทยา</h2>
                <h3>ลงทะเบียน</h3>
                <label htmlFor="email">Email:</label>
                <input className="input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="Password">password:</label>
                <input className="input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <input className="input" type="submit" value="create account"/>
                </div>
                
            </form>
            </StyledWrapper>
        </React.Fragment>
    )
}

export default RegisterForm;