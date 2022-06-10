import {useSelector} from "react-redux"
function TodoList(){
    const todos = useSelector((state)=>state.todos.tasks)
    console.log(todos)
    return(
        <div>
            <h2>Todos</h2>
            {todos.map((item)=>(
            <div key={item.id} >{item.title}</div>
            ))}
        </div>
    )
}

export default TodoList;