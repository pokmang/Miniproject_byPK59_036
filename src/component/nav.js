import React , { useEffect, useState} from "react" ;
import { Link, withRouter } from "react-router-dom" ;
import { useDispatch , useSelector} from "react-redux" ;
import { logoutUser } from "../actions/logout";
import firebase from "../firebase/config";
import styled from "styled-components"

const StyledWrapper = styled.div`

    background-color: #DCBD60;
    height: 65px;
    .text{
        padding-right: 700px;
        font-size: 35px;

    }
   


`

const Nav = (props) =>{

    const loginSelector = useSelector((state)=> state.logIn);
    const registerSelector = useSelector((state)=> state.register);
    const [userState , setUserState] = useState(null);
    const dispatch = useDispatch();
    const logoutUserAction = () => dispatch(logoutUser());

    useEffect(()=>{
        firebase.getUserState().then(user=>{
            setUserState(user);
        });
    })

    const logout = async() =>{
        console.log("logout user");
        setUserState(null);
        await logoutUserAction();
    }

    let buttons;
    if((loginSelector.user & loginSelector.user.hasOwnProperty("user")) || (registerSelector.user&&registerSelector.user.hasOwnProperty("user")) || userState != null){
        buttons =(
            <React.Fragment>
                 <a className="navbar-brand" ><Link to="/booklist">รายการหนังสือ</Link></a>
                 <a className="navbar-brand" ><Link to="/addbook">เพิ่มหนังสือ</Link></a>
                 <a className="navbar-brand" ><button onClick={logout}>ออกจากระบบ</button></a>
            </React.Fragment>
        )
    }else{
    
    }

    return(
        <StyledWrapper>
            
                 <spen className="text">
                     ห้องสมุดโรงเรียนดรุณศาสน์วิทยา
                </spen>
                   {buttons}   
             
               
                
         
        </StyledWrapper>

               
    
    )

}

export default withRouter(Nav);