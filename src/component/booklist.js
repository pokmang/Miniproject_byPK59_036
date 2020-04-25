import React , {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./nav";
import { getPosts } from "../actions/getPosts";
import styled from "styled-components" ;
const StyledWrapper = styled.div` 

        .flex-container{
            border: 3px solid red;
            border-radius: 8px;
            margin: 30px 1100px 5px 5px;
        }



`

const Booklist = (props) => {
    const getPostsSelector = useSelector((state) => state.post)
    
    const dispatch = useDispatch();
    const getPostsAction = () => dispatch(getPosts());

   
    useEffect(() => {
      checkLogin()
      getPostsAction();
    },[])
    const checkLogin = ()=>{
      let email = localStorage.getItem('email')
      if(email==null) props.history.push('/')
      else props.history.push('/booklist')
  }
    return(
        <StyledWrapper>
          
            <Nav/>
            <div>
            {getPostsSelector.posts.map(post => {
            return(
              <div className="flex-container" key={post.id}>
                  <img src={post.data.cover} width="200px"/>
                  <div style={{backgroundImage: "url(" + post.data.cover + ")" }} />
                  <Link to={"post/" + post.id}>
                    <p>รหัส :{post.data.code}</p>
                    <p>ชื่อ :{post.data.namebook}</p>
                    <p>หมวด :{post.data.group}</p>
                  </Link>
              </div>
            )
          })}
            </div>
          
        
    
        </StyledWrapper>
    )

}

export default Booklist;