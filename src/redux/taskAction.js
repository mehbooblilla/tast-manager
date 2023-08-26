export const addTask=(task)=>{
    return{
        type:"ADD_TASK",
        payload:task
    }
}
export const editTask=(task)=>{
    return{
        type:"EDIT_TASK",
        payload:task
    }
}
export const deleteTask=(taskId)=>{
    return{
        type:"DELETE_TASK",
        payload:taskId
    }
}
export const completeTask=(taskId)=>{
    return{
        type:"COMPLETE_TASK",
        payload:taskId
    }
}
export const deleteCompletedTask=(taskId)=>{
    return{
        type:"DELETE_COMPLETED_TASK",
        payload:taskId
    }
}