const addBook=(
    state = {
    post: {} 
    }, 
    action)=>{
        if(action.type === "ADD_BOOK"){
            state= {...state, post: action.payload}
        }
        return state;
    };
   
export default addBook;