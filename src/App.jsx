import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import User from "../pages/User"
import { Routes , Route } from "react-router-dom"
import Main from "../pages/Main"
import { useEffect } from "react"

function App() {


  return (
    <Routes>
      <Route index element={<Main/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>    
  )
}

export default App
