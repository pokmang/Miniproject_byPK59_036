import React , { useEffect, useState} from "react" ;
import { Link, withRouter } from "react-router-dom" ;
import { useDispatch , useSelector} from "react-redux" ;
import { logoutUser } from "../actions/logout";
import firebase from "../firebase/config";
import styled from "styled-components"



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
        localStorage.clear()

        props.history.push("/")
    }

    let buttons;
    if((loginSelector.user & loginSelector.user.hasOwnProperty("user")) || (registerSelector.user&&registerSelector.user.hasOwnProperty("user")) || userState != null){
        buttons =(
            <React.Fragment> 
                <nav class="navbar navbar-dark bg-dark">
                     
                <a className="navbar-brand" ><Link to="/booklist">รายการหนังสือ</Link></a>
                 <a className="navbar-brand" ><Link to="/addbook">บริหารจัดการหนังสือ</Link></a>
                 <a className="navbar-brand" ><button onClick={logout}>ออกจากระบบ</button></a>




                </nav>

            </React.Fragment>
        )
    }else{
        
    }

    return(
           <div>
                {buttons}   
           </div>
            
      

               
    
    )

}

export default withRouter(Nav);