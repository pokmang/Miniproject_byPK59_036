import React , { useEffect, useState} from "react" ;
import { Link, withRouter } from "react-router-dom" ;
import { useDispatch , useSelector} from "react-redux" ;
import { logoutUser } from "../actions/logout";
import firebase from "../firebase/config";

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
                <li><button className="logout" onClick={logout}>Logout</button></li>
            </React.Fragment>
        )
    }else{
     buttons =(
         <React.Fragment>
             <li><Link to="/register">register</Link></li>
             <li><Link to="/login">login</Link></li>
         </React.Fragment>
     )   

    }

    return(
        <nav>
            {buttons}     
        </nav>
    )

}

export default withRouter(Nav);