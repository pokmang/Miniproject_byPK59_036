import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";
import { Redirect } from "react-router-dom";
import styled from "styled-components"

const StyledWrapper = styled.div`

 
    background-image: url('https://i.imgur.com/zceQljC.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;


    
`

const LoginFrom = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));
    useEffect(() => {
        checkLogin()
    }, [])
    const checkLogin = () => {
        let email = localStorage.getItem('email')
        if (email == null) props.history.push('/')
        else props.history.push('/booklist')
    }
    const login = async (e) => {
        e.preventDefault()

        if (email !== "" && password !== "") {

            console.log("login user in");
            let user = await logInUserAction(email, password);
            if (user) {
                setRedirect(true);
                console.log(user);
                localStorage.setItem("email", email)
                alert('Login Success')
            }
            else {
                alert('Not found user')
            }

        } else {
            alert('input your user')
            console.log("need to fill the credentials")
        }

    }

    const redirectTo = redirect;
    if (redirect) {
        return <Redirect to="/booklist" />
    }



    return (
        <React.Fragment>
            <StyledWrapper>

                <div class="container" style={{width: '20%'}}>
                    <div className="form">

                        <form onSubmit={login} >

                            <h3 className="text-tile">ระบบจัดการห้องสมุด</h3>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email@darun.ac.th" onChange={(e) => setEmail(e.target.value)} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <Link to="/register">register</Link>


                        </form>

                    </div>
                </div>
            </StyledWrapper>
        </React.Fragment>
    )






}
export default LoginFrom;