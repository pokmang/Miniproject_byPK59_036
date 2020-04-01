import { useState } from 'react' ;
import styled from 'styled-components' ;
import React from 'react';
import img from '../images/background.jpg' ;
import face from '../images/fblogin.png'
const Wrapper = styled.div`
    
    // background-image: url(${img});
    // min-height: 100%;
    // min-width: 1024px;
    // width: 100%;
    // height: auto;
    // position: fixed;
    // top: 0;
    // left: 0;


// .back{
//     background-image: url(${face});
//     width: 100%;
//     height: 400px;
// }
`;


const LoginFrom = () =>{
    

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
                    <button >register</button>   
                </div>
                <img src="https://praew.com/app/uploads/2018/04/facebook-sign-in-button-600x225.jpg" width="130" height="80"></img>
                
            
            </div>
         </Wrapper>

    )








}
export default LoginFrom ;