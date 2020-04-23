import React ,{useState}  from "react";
import { Redirect } from 'react-router';
import { useDispatch } from "react-redux";
import { createPost } from "../actions/create";
import styled from "styled-components";

const StyledWrapper = styled.div`

    .addform{
        border: 1px solid red;
        border-radius: 8px;
        
        height: 500px;
        width: 400px;
        margin: 40px;
    }
    margin: 30px 1100px 0px 0px;
    
    .text{
        margin: 40px 1100px 0px 20px;
        font-size: 25px;
    }

    .text1{
  border-radius: 8px;
  margin-top: 40px;-
  border: 2px solid #00ff11;
  height: 40px;
  width: 90px;
  margin : 13px;
  font-size: 18px;
  color: #fff;
  background-color : #00ff11;
  cursor: pointer;
  &:hover{
      color: #00ff11;
      background-color: #fff;
      
  }}
  

  
`



const Create = () =>{

    const [code, setcode] = useState("");
    const [namebook, setnamebook] = useState("");
    const [group, setgroup] = useState("");
    const [cover, setCover] = useState("");

    const [routeRedirect, setRedirect] = useState("");   
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
    const createPostAction = (post) => dispatch(createPost(post));
  

    const addPost = async(e) =>{
        e.preventDefault();
        setLoading(true);
        let post = {
            code,
            namebook, 
            group,
            cover: cover[0]
        }

        await createPostAction(post);
        setLoading(false);
        setRedirect(true);
    }

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />  
    }

    let form;
   
    if(loading){
        form = 
        <div className="processing">
            <p>Request is being processed</p>
            <div className="loader">Loading...</div>
        </div>
    }else{
        form = <form onSubmit={addPost}>
            
            <label className="text" htmlFor="title">รหัส: </label>
            <input type="number" onChange={(e) => setcode(e.target.value)} />
          
            <label className="text" htmlFor="content">ชื่อ: </label>
            <input type="text" onChange={(e) => setnamebook(e.target.value)}  ></input>
           
            <label className="text" htmlFor="content">หมวด: </label>
            <input type="text" onChange={(e) => setgroup(e.target.value)}  ></input>
           
            <label className="text" htmlFor="cover" >รูป</label>
            <input type="file" onChange={(e) => setCover(e.target.files)} />
            <br/>
            <input className="text1" type="submit" value="เพิ่มหนังสือ" />



        </form>
    }
    return(
        <StyledWrapper>
            <h1>เพิ่มหนังสือใหม่</h1>
            <div className="addform">
                  {form}
            </div>
        </StyledWrapper>
           
        
    )
}

export default Create;