import {useEffect, useState} from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export const UserPage = ()=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const params = useParams();

    useEffect(()=>{
        setLoading(true);
        const {id} =params;
        axios({
            url: `https://reqres.in/api/users/${id}`,
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
    },[params.id])
    console.log(data)
    return(
        <div  >
            {loading && <div>loading</div> }
           
             <div key={data?.data?.id} >
                 <img src={data?.data?.avatar} ></img>
            <div>Name:{data?.data?.first_name}</div>
            <div>Email:{data?.data?.last_name}</div>
        
            </div>
            
        
        </div>
        )
}