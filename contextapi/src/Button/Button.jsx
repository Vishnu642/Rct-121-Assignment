import { AppContext } from "../contexts/AppContextProvider";
import {useContext} from "react"
import style from "./Button.module.css"


function Button ({text,onClick}){
    const [theme,toggleTheme] = useContext(AppContext)
    return(
        <button className={`${style.buttonBase} ${theme==="light"?style.buttonLight:style.buttonDark}`} >{text}</button>
    )
}

export default Button;

