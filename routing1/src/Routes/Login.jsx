import axios from "axios"
import { useCallback, useContext } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Login=()=>{
    const [state,dispatch] = useContext(AuthContext)

    const navigate = useNavigate();

    const [searchParams,setSearchParams] = useSearchParams();

    const LoginUser = ()=>{
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
                
                    email: "eve.holt@reqres.in",
                    password: "cityslicka"
                
            }
        }).then(res=>{
            alert("Success")
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:res.data.token
            })
            const redirect= searchParams.get("redirectTo")
            if(redirect){
                navigate(redirect)
            }
            else{
            navigate("/users")
            }
        }).catch(err=>{
            alert("Unsuccessfull")
        })
    }


    if(state.isAuth){
        return <Navigate to="/" />
    }
    return(
        <div>
            <h2>Login</h2>
            <button onClick={LoginUser} >Login</button>
            </div>
        
    )
}
