import { Link } from "react-router-dom"
import styles from "../styles/Main.module.css"
export default function Main() {
  return (
    <>
        <div>Main Page</div>
        <Link to="/signup"><div>Sign Up</div></Link>
        <Link to="/login"><div>Log In</div></Link>
        <Link to="/user"><div>User Info</div></Link>
    </>
  )
}
