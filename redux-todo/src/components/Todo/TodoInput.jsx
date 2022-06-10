import { useState } from "react"
import {useDispatch} from "react-redux"

function TodoInput(){
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a task" ></input>
        <button>ADD</button>
        </div>
    )
}

export default TodoInput;