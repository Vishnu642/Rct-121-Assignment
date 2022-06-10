import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Routes/Navbar'
import {Routes,Route} from "react-router-dom"
import {Home} from "./Routes/Home"
import {Contact} from "./Routes/Contact"
import {Users} from "./Routes/Users"
import {UserPage} from "./Routes/UserPage"
import {Login} from "./Routes/Login"
import { PrivateRoute } from './Routes/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>} ></Route>
       <Route path="/contact" element= {<Contact/>}></Route>
       <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>} ></Route>
       <Route path="/users/:id" element={<UserPage/>} ></Route>
       <Route path= "/login" element= {<Login/>}></Route>
     </Routes>
    </div>
  )
}


export default App
