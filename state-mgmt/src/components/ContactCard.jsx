import "./ContactCard.css"

export const ContactCard = ({id,name,phone,onDelete})=>{
    return (
        <div>
        <div className="contact" >{name}{phone}<button onClick={()=>onDelete(id)} >Delete</button></div>
       
        </div>
    )
}