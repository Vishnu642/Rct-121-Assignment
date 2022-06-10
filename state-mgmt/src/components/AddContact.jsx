import { useState } from "react"
import "./AddContact.css"

export const AddContact=(props)=>{
    const [text,setText] = useState("")
    const [phone,setPhone] = useState("")

    const handleClick=()=>{
            if(props.handleClick) props?.handleClick(text,phone);
            setText("");
            setPhone("");
    }
    return(
        <div className="addcontact" >
            <div>
             <input placeholder="name" value={text} onChange={e=>setText(e.target.value)} ></input>
            
            </div>
            <div>
            <input placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} ></input>
            </div>
            <div>
            <button onClick={handleClick} >Add</button>
            </div>
        </div>
    )
}