import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./login.css"

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    } 

    const handleClick = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})

        try {

            const res = await axios.post("/api/auth/login", credentials);
            if (res.data.isAdmin) {
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            navigate("/");}
            else 
            dispatch({type: "LOGIN_FAIL", payload: {message: "Bạn không có quyền truy cập"},})

        }  catch(error) {
            dispatch({type: "LOGIN_FAIL", payload: error.response.data})
        }
           
    };

  return (
    <div className='loginContainer'>
        <div className="loginRow">
            <div className="loginCol">
              
            </div>
        </div>
        <div className="loginRow">
            <div className="loginCol">
                <input type="text" id="username" onChange={handleChange} className="loginInput" placeholder='Username' />
                <input type="password" id="password" onChange={handleChange} className="loginInput" placeholder='Password' />
                <div className="loginButton">
                    <button disabled={loading} onClick={handleClick}>Login</button>
                    {error && <h2>{error.message}</h2>}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login
