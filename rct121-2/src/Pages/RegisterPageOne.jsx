import "./RegiterPageOne.css"
import {Link} from "react-router-dom"

export const RegisterPageOne=()=>{
    return(
        <div className="pageone" >
            <div className="pageonebox" >
                <label>USERNAME</label>
                <input type="text" /><br></br>
                <label>USER EMAIL</label>
                <input type="text" /><br></br>
                <Link to="/register/two" ><button>NEXT</button></Link>
            </div>
        </div>
    )
}
