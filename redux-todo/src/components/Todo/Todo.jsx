import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTodoFailure, getTodoSuccess,getTodoRequest, getTodos } from "../../Redux/todos/action"
import  TodoInput  from "./TodoInput"
import TodoList from "./TodoList"
import {axios} from "axios"

export const Todo =()=>{

    const dispatch = useDispatch;

    useEffect(()=>{
      getTodos(dispatch)
    },[])


    return(
        <div>
        <TodoInput/>
        <br></br>
        <TodoList/>
        </div>
    )
}