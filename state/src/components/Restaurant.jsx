import {useState,useEffect} from "react"
import "./Restaurant.css"

export const Restaurant =()=>{
    const [food, setFood] = useState([])

    useEffect(()=>{
     fetch("http://localhost:8020/food").then((e)=>e.json()).then((data=>{
       setFood(data)
     }))
    },[])
   
    return(
        <div>
             <div className="" ><h1>Swiggy</h1></div>
        <div className="container" >
           
               
                {food.map((foods)=>(
                     <div className="restaurant-card" >
     <div className="res-top" >
        <div className="res-img" ><img src={foods.image} ></img></div>
        <div className="res-details" >
            <h2>{foods.name}</h2>
            <p>{foods.category}</p>
            <p>Cost {foods.cost_for_one} for one</p>
            <p>{foods.payment_method}</p>
        </div>
        <div className="res-rating" >
            <p>{foods.star}</p>
            <p>{foods.total_votes} Votes</p>
            <p>{foods.reviews} reviews</p>
        </div>
    </div>
                     
                <div className="res-bottom" >
                    <button>Order online </button>
                </div>
    </div>
            ))}
               
       
            </div>
       
       
        
        </div>
    )
}