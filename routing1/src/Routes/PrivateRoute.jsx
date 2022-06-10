import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"


export const PrivateRoute=({children})=>{
    const [state] = useContext(AuthContext);

   
           
    
        if(state.isAuth){
            return children
        }
        else{
           return <Navigate to="/login" />
        }
    
}