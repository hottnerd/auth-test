import axios from 'axios';
import {useState} from 'react'
import styles from "../styles/SignUp.module.css"
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate()

    const submitHandle = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("https://auth-test-d6po.onrender.com/api/register",{
                    username: username,
                    password : password
                });
                navigate("/login");
        }catch(err){
            alert(err.response)
            setUsername("");
            setPassword("");
        }    
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
              <button onClick={submitHandle}>Sign Up</button>      
          </form>
      </div>
      )
}
