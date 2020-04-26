import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./nav";
import { getPosts } from "../actions/getPosts";
import styled from "styled-components";
const StyledWrapper = styled.div` 

    .row{
        margin : 20px 30px 0px 30px;
    }
     


`

const Booklist = (props) => {
  const getPostsSelector = useSelector((state) => state.post)

  const dispatch = useDispatch();
  const getPostsAction = () => dispatch(getPosts());


  useEffect(() => {
    getPostsAction();
  }, [])
  const checkLogin = () => {
    let email = localStorage.getItem('email')
    if (email == null) props.history.push('/login')
    else props.history.push('/booklist')
  }
  return (
    <StyledWrapper>

      <Nav />
    
      <div class="d-flex justify-content-start">
      <div className ="row">
     
        {getPostsSelector.posts.map(post => {
          return (

            <div className ="card" style={{width: '20rem'}}>
                <div className ="card-body"><img src={post.data.cover} width="200px" alt="Card image cap"/>
                  <h5 className ="card-title">{post.data.namebook}</h5>
                </div>
                <ul className ="list-group list-group-flush">
                  <li className ="list-group-item">รหัส :{post.data.code}</li>
                  <li className ="list-group-item">ชื่อ :{post.data.namebook}</li>
                  <li className ="list-group-item">หมวด :{post.data.group}</li>
                </ul>

            </div>
            )
          })}
          </div>
            </div> 
           
        
          
        
    
        </StyledWrapper>
    )

}

export default Booklist;