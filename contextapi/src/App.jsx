import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from "./Button/Button"
import { AppContext } from './contexts/AppContextProvider'
import { Counter } from './Counter/Counter'

function App() {
  const [count, setCount] = useState(0)
  const [theme,toggleTheme] = useContext(AppContext)

  return (
    <div className="App">
      <h1>Hello world</h1>
     <Button text="Theme" /><br></br>
     <button onClick={toggleTheme} >Toggle Theme</button>
     <Counter/>
    </div>
  )
}

export default App
