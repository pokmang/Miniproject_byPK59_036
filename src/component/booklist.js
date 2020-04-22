import React , {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../actions/getPosts";
 


const Booklist = () => {
    const getPostsSelector = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const getPostsAction = () => dispatch(getPosts());

   
    useEffect(() => {
      getPostsAction();
    },[])

    return(
        <React.Fragment>
           <header>
             <div>
                <h1>React Redux <br/> Hooks Firebase</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum, ex et elementum ornare, neque quam tempus mi, sed mollis mi nibh lacinia erat</p>
             </div>
        
           </header>
    
        <div>
          {getPostsSelector.posts.map(post => {
            return(
              <div  key={post.id}>
                  <div style={{backgroundImage: "url(" + post.data.cover + ")" }} />
                  <Link to={"post/" + post.id}>
                    <p>{post.data.title}</p>
                  </Link>
              </div>
            )
          })}
        </div>
    
        </React.Fragment>
    )

}

export default Booklist;