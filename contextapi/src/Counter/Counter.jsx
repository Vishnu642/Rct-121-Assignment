import { useReducer } from "react"


const initState = {
    counter:0,
    noOfClicks:0
}

const counterActions = {
    increment : "INCREMENT",
    decrement : "DECREMENT"
}

const reducer =(state,action)=> {
switch(action.type){
    case "INCREMENT":{
        return{
            ...state,
            counter:state.counter+1
        }

    }
    case "DECREMENT":{
        return{
            ...state,
            counter:state.counter-1
        }

    }

    default:{return state}
}
}

export const Counter = ()=>{
    const [state,dispatch] = useReducer(reducer,initState)
    return(
        <div>
            <h2>{state.counter}</h2>
            <div>
                <button onClick={()=>dispatch({type:counterActions.increment})} >ADD</button>
                <button onClick={()=>dispatch({type:counterActions.decrement})} >REDUCE</button>
                </div>
        </div>
    )
}
