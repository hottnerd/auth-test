import React, { useState } from 'react'
import axios from "axios";
import { useNavigate , redirect} from 'react-router-dom';

export default function Login() {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault()

    try{
        const res = await axios({
            method: 'post',
            url: "https://auth-test-d6po.onrender.com/api/login",
            data: {
                username: username,
                password : password
            },
            withCredentials: true
          });
        navigate("/user");
        
    }catch(err){
        alert(err.response)
        setUsername("");
        setPassword("");
    }   
  };

  const submitHandleGoogle = async (e) => {
    e.preventDefault()
    window.location.replace("https://auth-test-d6po.onrender.com/api/auth-google");
  };

  const submitHandleFacebook = async (e) => {
    e.preventDefault()
  };
    return (
    <div>
         <form>
            <label>Enter your username:</label>        
            <input
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Enter your password:</label>
            <input
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />   
            <button onClick={submitHandle}>Log In</button>
            <button onClick={submitHandleGoogle}>Log In with Google</button>
            <button onClick={submitHandleFacebook}>Log In with Facebook</button>   
        </form>
    </div>
  )
}
