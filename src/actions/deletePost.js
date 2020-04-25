import firebase from "../firebase/config";

export const deletePost = (postid) => {
 
    return async function(dispatch){
      const post = await firebase.deletePost(postid);
      dispatch({type: "DELETE_POST", payload: post});
       
    }
 

}