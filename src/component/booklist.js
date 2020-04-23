import React , {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../actions/getPosts";
import styled from "styled-components"
const StyledWrapper = styled.div`



`

const Booklist = () => {
    const getPostsSelector = useSelector((state) => state.post)
    
    const dispatch = useDispatch();
    const getPostsAction = () => dispatch(getPosts());

   
    useEffect(() => {
      getPostsAction();
    },[])
    
    return(
        <StyledWrapper>
        <div className="flex-container">    
            <div>
            {getPostsSelector.posts.map(post => {
            return(
              <div key={post.id}>
                  <img src={post.data.cover} width="100px"/>
                  <div style={{backgroundImage: "url(" + post.data.cover + ")" }} />
                  <Link to={"post/" + post.id}>
                    <p>{post.data.title}</p>
                  </Link>
              </div>
            )
          })}
            </div>
          
        </div>
    
        </StyledWrapper>
    )

}

export default Booklist;