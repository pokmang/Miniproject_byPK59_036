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
                 <a class="navbar-brand" ><Link to="/booklist">รายการหนังสือ</Link></a>
                 <a class="navbar-brand" ><Link to="/addbook">เพิ่มหนังสือ</Link></a>
                 <a><button className="logout" onClick={logout}>ออกจากระบบ</button></a>
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