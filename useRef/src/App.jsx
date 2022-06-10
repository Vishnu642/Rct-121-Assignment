import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const ChatApp = ()=>{
  const [user,setUser] = useState("albert")
const [text,setText] = useState("")

const handleUpdate=()=>{
  setUser(text);
}

const subscribe=(user)=>{
  console.log(`subscribing to ${user}`)
}



useEffect(()=>{
  subscribe(user)
  return ()=>{
    console.log(`unsubscribing ${user}`)
  }
},[user])

  return(
    <div>
      <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" value={text} ></input>
        <button onClick={handleUpdate} >Update</button>
      </div>
        <div>
          <h2>Listening to {user}</h2>
        </div>
    </div>
  )
}


function App() {

  return (
    <div className="App">
     <ChatApp/>
    </div>
  )
}

export default App
