import firebase from "../firebase/config";

export const createUser = (email, password,firstname ,lastname) => {
 
    return async function(dispatch){
      
        const user = await firebase.signin(email, password,firstname ,lastname);
        console.log(user);
        dispatch({type: "CREATE_USER", payload: user});
      
    
    }

}