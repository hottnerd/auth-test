import axios from 'axios';
import {useEffect,useState} from 'react'
import styles from "../styles/User.module.css"

export default function User() {
    
  const [user,setUser] = useState();

  useEffect(()=>{
    axios.defaults.withCredentials = true;
    axios.get("https://auth-test-d6po.onrender.com/api/user").then(res=>{
        setUser(res.data);
        console.log(res)
    }).catch(err=>{
        alert(err)
    })
  },[]);
    console.log(user)
    return (
    <div className={styles.container}>
        <div>{user}</div>
    </div>
  )
}
