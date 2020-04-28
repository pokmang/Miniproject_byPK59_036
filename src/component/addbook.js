import React, { useState ,useEffect} from "react";
import { Redirect } from 'react-router';
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/create";
import styled from "styled-components";
import { getPosts } from "../redux/actions/getPosts";

import Nav from "./nav";
const StyledWrapper = styled.div`
    .form-addbook{
        margin: 10px 500px 0px 500px;
        border: 5px soled red ;
        border-style: solid;
        border-color: black;
        border-width: 2px;
        border-radius: 30px 30px 30px 30px;
    }

    h1{
        padding: 40px;
        font-size: 60px;
    }

    .textinput{
        font-size: 30px;
        padding-right: 20px;
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
            }
        }
        .input1{
            padding-right: 20px;
        }
        .input2{
            padding-right: 20px;
            margin : 0px 0px 0px 14px;

        }
        .img{
            margin : 0px 0px 0px 60px;
        }
  

  
`



const Create = (props) => {

    const [code, setcode] = useState("");
    const [namebook, setnamebook] = useState("");
    const [group, setgroup] = useState("");
    const [cover, setCover] = useState("");
    const [routeRedirect, setRedirect] = useState("");
    const [loading, setLoading] = useState(false);

    

    const getPostsAction = () => dispatch(getPosts());
    
   
    useEffect(() => {
        checkLogin()
      getPostsAction();
    },[])

    const checkLogin = ()=>{
        let email = localStorage.getItem('email')
        if(email==null) props.history.push('/')
        else props.history.push('/addbook')
    }

    const dispatch = useDispatch();
    const createPostAction = (post) => dispatch(createPost(post));

    const addPost = async (e) => {
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
    if (redirect) {
        return <Redirect to="/booklist" />
    }

    let form;

    if (loading) {
        form =
            <div className="processing">
                <p>Request is being processed</p>
                <div className="loader">Loading...</div>
            </div>
    } else {
        form = <form onSubmit={addPost}>

            <label className="textinput" htmlFor="title">รหัส: </label>
            <input className="input1" type="number" onChange={(e) => setcode(e.target.value)} />
            <br />
            <label className="textinput" htmlFor="content">ชื่อ: </label>
            <input className="input2" type="text" onChange={(e) => setnamebook(e.target.value)}  ></input>
            <br />
            <label className="textinput" htmlFor="content">หมวด: </label>
            <input type="text" onChange={(e) => setgroup(e.target.value)}  ></input>
            <br />
            <div className="img">
                <label className="textinput" htmlFor="cover" >รูป</label>
                <input type="file" onChange={(e) => setCover(e.target.files)} />
            </div>

            <br />
            <input className="text1" type="submit" value="เพิ่มหนังสือ" />



        </form>
    }
    return (
        <StyledWrapper>
            <Nav />
            {/* <Modal
                title="ลบหนังสือ"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {renderListBook()}
            </Modal> */}
            <h1>เพิ่มหนังสือ</h1>
            <div className="form-addbook">

                <div>
                    {form}
                </div>
                <div >
                    {/* <button onClick={showModal} >ลบหนังสือ</button> */}
                </div>
            </div>

        </StyledWrapper>


    )
}

export default Create;