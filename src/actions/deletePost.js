import firebase from "../firebase/config";

export const deletePost = (postid) => {
  console.log(postid);
  return async function (dispatch) {
    console.log(postid);
    const post = await firebase.deletePost(postid);
    dispatch({ type: "DELETE_POST", payload: post });

  }


}
// export const deleteProstAction = () => {
//   test: (id) => async (dispatch) => {
//     const api = "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
//     try {
//       console.log(id);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }