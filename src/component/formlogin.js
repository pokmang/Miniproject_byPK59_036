import { useState } from 'react' ;
import styled from 'styled-components' ;
import React from 'react';
import img from '../images/background.jpg' ;
import face from '../images/fblogin.png'
const Wrapper = styled.div`

  
 
//background-image: url(${img});
  width: 1000px;
  height: 1000px;

.back{
    background-image: url(${face});
    width: 500px;
    height: 200px;
}
`;


const LoginFrom = () =>{
    const [ formdata ,setformdata ] = useState({
        userid: '',
        password: ''
    })

    return(
         <Wrapper>
            <div>
                <h1>ห้องสมุด</h1>
                <h2>โรงเรียนดรุณศาสน์วิทยา</h2>
                <div >
                    <label >Username</label>
                    <input type="text"  placeholder="Username"></input>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" placeholder="Password"></input>
                </div>
                <div >
                    <button >login</button>
                </div>
                <button className ="back"></button>
            
            </div>
         </Wrapper>

    )








}
export default LoginFrom ;