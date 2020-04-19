import React , {useState} from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";
import {Redirect} from "react-router-dom";
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

        }

    

`

const LoginFrom = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);
   
    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));


    const login = async(e) => {
        e.preventDefault()
        
        if(email !== "" && password !== ""){
            console.log("login user in");
            let user = await logInUserAction(email, password);
            if (user){
              setRedirect(true);
            }
            
        }else{
            console.log("need to fill the credentials")
        }
        
    } 

    const redirectTo = redirect;
    if(redirect){
        return <Redirect to="/" />  
    }



    return(
        <React.Fragment>
            <StyledWrapper>
            <form  onSubmit={login}>

                <div className="box">
                <h3 className ="text-tile">ระบบจัดการห้องสมุด</h3>
                <label for="uname"><b>Email</b></label>
                <input  className="input" type="email" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label for="psw"><b>Password</b></label>
                <input className="input" type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <input className="input" type="submit" value="Login"/>
                </div>
            </form>
            </StyledWrapper>
        </React.Fragment>
    )

   




}
export default LoginFrom ;