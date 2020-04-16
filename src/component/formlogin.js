import { useState } from 'react' ;
import styled from 'styled-components' ;
import React from 'react';
import img from '../images/background.jpg' ;
import face from '../images/fblogin.png'
const Wrapper = styled.div`
  
  
    
    
   
  

    .imgurl{
        img{
            width: 100vm;
            height: 100vh;
            position: relative
        }

    }
 .back{
    background-image: url(${face});
     width: 100%;
    height: 400px;
}
`;


const LoginFrom = () =>{

    const imgUrl = "https://drive.google.com/file/d/11DhzvOYzFQmJo6M0bF4ns6bFK3IQ_Vjo/view?usp=sharing"
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    return(
         <Wrapper>
             <div className ="imgurl">
                 <img src = {imgUrl} />
             </div>
            <div>
                <h1>ห้องสมุด</h1>
                <h2>โรงเรียนดรุณศาสน์วิทยา</h2>
                <div >
                    <label >Username</label>
                    <input type="text"  placeholder="Username" onChange={e => setFormData({ ...formData, email: e.target.value })} ></input>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })}></input>
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