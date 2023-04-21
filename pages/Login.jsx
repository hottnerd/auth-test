import React, { useState } from 'react'
import styles from "../styles/login.module.css"
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
            url: "http://127.0.0.1:8000/api/login",
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
    window.location.replace("http://127.0.0.1:8000/api/auth-google");
  };

  const submitHandleFacebook = async (e) => {
    e.preventDefault()
  };
    return (
    <div className={styles.container}>
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
