import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(null)
  const [text,setText] = useState("")

  const Timer = ()=>{
    return(
      <div>
        <h1>Timer:{time}</h1>
      </div>
    )
  }


const handleChange=(value)=>{
  setTime(text)
  if(time===0){
    clearInterval(id)
  }
  const id=setInterval(()=>{
    setTime(time-value)
  },1000)
  
}
const TimerInput = ()=>{
  return(
    <div>
      <input type="number" onChange={(e)=>setText(e.target.value)} ></input>
      <button onClick={handleChange(-1)} >Start timer</button>
    </div>
  )
}
  return (
    <div className="App">
      {time===null?<TimerInput/>:<Timer/>}
    </div>
  )
}

export default App
