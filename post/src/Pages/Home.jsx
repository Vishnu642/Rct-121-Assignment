import { useState } from "react"
import {Link} from "react-router-dom"

export const Home = ()=>{
    const [text,setText] = useState("")
    return(
        <div>
            <label>Email</label>
            <input value={text} type="text" onChange={()=>setText(e.target.value)} ></input>
            <br></br>
            <br></br>
            <label>Password</label>
            <input value={text} type="text" ></input>
            <br></br>
            <br></br>
            <Link to="/posts" ><button>LOGIN</button></Link>
        </div>
    )
}