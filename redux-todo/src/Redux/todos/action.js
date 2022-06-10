
export const todosAction = ()=>{
    GET_TODO_REQUEST : "GET_TODO_REQUEST"
    GET_TODO_SUCCESS : "GET_TODO_SUCCESS"
    GET_TODO_FAILURE :"GET_TODO_FAILURE"
}

export const getTodoRequest = ()=>({
 type:todosAction.GET_TODO_REQUEST
})

export const getTodoSuccess = (data)=>({
    type:todosAction.GET_TODO_SUCCESS,
    payload:data
})


export const getTodoFailure = ()=>({
    type:todosAction.GET_TODO_FAILURE
})

export const getTodos =(dispatch)=>{
    const todoRequestAction = getTodoRequest();
    dispatch(todoRequestAction)
    
    axios({
        url:" http://localhost:8080/tasks",
        method:GET
    }).then(res=>{
        console.log(res)
        const todoSuccessAction = getTodoSuccess(res.data);
        dispatch(todoSuccessAction)
    }).catch(err=>{
        const todoErrorAction = getTodoFailure();
        dispatch(todoErrorAction)

    })
}