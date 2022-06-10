import { useEffect } from "react"
import axios from "axios";
import { useState } from "react";
import "./Posts.css";

export const Posts =()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        axios({
            url:"https://jsonplaceholder.typicode.com/posts",
            method:"GET"
        }).then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    console.log(data)
    return(
        <div>
            {data.map(item=>(
                <div key={item.id} >
                <div className="post-title" >{item.id}.{item.title}.</div>
                <div className="post-body" >{item.body}</div>
                </div>
            ))}
        </div>
    )
}