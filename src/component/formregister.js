import React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { allAction } from '../redux/store'
import axios from 'axios'
  
const RegisterForm = () => {
    const form = useSelector(state => state.form)
    const actions = bindActionCreators(allAction, useDispatch())


    //ดึงค่าจากbackend
    const Register = async () => {
        await axios.put(`http://localhost/users`, form)
        actions.add_user({ ...form })
    }

    return (
        <div >
            <h1>ห้องสมุด</h1>
            <h2>โรงเรียนดรุณศาสน์วิทยา</h2>
            <h3>ลงทะเบียน</h3>
            <td>Student ID</td>
            <input className='inpt' type="text" onChange={(e) => actions.set_userid(e.target.value)} />
            <td>firstname</td>
            <input className='inpt' type="text" onChange={(e) => actions.set_firstname(e.target.value)} />
            <td>lastname</td>
            <input className='inpt' type="text" onChange={(e) => actions.set_lastname(e.target.value)} />
            <td>password</td>
            <input className='inpt' type="password" onChange={(e) => actions.set_password(e.target.value)} />
            <td><button className='btn' onClick={Register}>Register</button></td>
        </div>
    )
}

export default RegisterForm