
import "./RegiterPageTwo.css"
import {Link} from "react-router-dom"

export const RegisterPageTwo=()=>{
    return(
        <div className="pagetwo" >
            <div className="pagetwobox" >
                <label>ADDRESS</label>
                <input type="text" /><br></br>
                <label>PHONE NUMBER</label>
                <input type="number" /><br></br>
                <Link to="/" ><button>PREV</button></Link>
                <Link to="/dashboard" ><button>NEXT</button></Link>
            </div>
        </div>
    )
}