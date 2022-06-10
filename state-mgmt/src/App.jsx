import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {ContactCard} from "./components/ContactCard"
import { AddContact } from './components/AddContact'
function App() {
 const contact = [
   {
     first_name:"Vishnu",
     last_name:"D K",
     phone:"998873645"
   },
   {
    first_name:"Albert",
    last_name:"sebastian",
    phone:"758889645"
  },
 ]

 const [details,setDetails]= useState(contact);
 const handleClick=(name,phone)=>{
  setDetails([
    ...details,
    {
      id:details[details.length-1].id+1,
      first_name:name,
      last_name:"",
      phone:phone,
    }
  ])
 }
 console.log(details)

 const deletebyId = (id)=>{
    setDetails(
      details.filter((items)=>items.id!==id)
    )
 }

  return (
    <div className="App">
      <AddContact handleClick={handleClick} />
     {details.map(items=>(
       <div key={items.id} >
       <ContactCard key={items.id} name={items.first_name} phone={items.phone} onDelete={deletebyId} />
       </div>
     ))}
     
    </div>
  )
}

export default App
