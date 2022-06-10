import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useContext } from 'react'
import { ReduxContext } from './Redux/ReduxProvider'
import { incrementCountActions } from './Redux/action'

function App() {
  

  const [getState,dispatch] = useContext(ReduxContext); 
console.log(getState());
  const state = getState();

  return (
    <div className="App">
      <h1>Count : {state.count}</h1>
        <button onClick={()=>dispatch(incrementCountActions(1))} >ADD</button>
        <button onClick={()=>dispatch(incrementCountActions(-1))} >REDUCE</button>
    </div>
  )
}

export default App
