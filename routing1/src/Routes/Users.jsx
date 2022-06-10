import {useContext, useEffect, useState} from "react"
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export const Users = ()=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [state] = useContext(AuthContext)
    
    useEffect(()=>{
       
        setLoading(true);
        axios({
            url: "https://reqres.in/api/users",
            method:"GET" 
        })
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(true)
            console.log("err")
        })
    },[])

    console.log(data)
    return(
        <div  >
            {state.token && <h3>Token:{state.token}</h3>}
            {loading && <div>loading</div> }
            {data?.data?.map((item)=>(
             <div key={item.id} >
            <div>Name:{item.first_name}</div>
            <div>Email:{item.email}</div>
            <Link to={`/users/${item.id}`}>See more</Link>
            </div>
            
            ))}
        </div>
        )
}