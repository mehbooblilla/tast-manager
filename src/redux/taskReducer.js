const initialState={
    tasks:[],
    completedTasks:[]
}

const taskReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return{
                ...state,
                tasks:[...state.tasks,action.payload]
            };

        case "EDIT_TASK":
            return{
                ...state,
                tasks:state.tasks.map((task)=>task.taskId===action.payload.taskId? action.payload:task)

            }
        case "DELETE_TASK":
            return{
                ...state,
                tasks:state.tasks.filter((task)=>task.taskId!==action.payload)
            }
        case "COMPLETE_TASK":
            const completedTask=state.tasks.find((task)=>task?.taskId=== action.payload)
            return{
                ...state,
                tasks:state.tasks.filter((task)=>task.taskId!==action.payload),
                completedTasks:[...state.completedTasks,completedTask]

            }
        case "DELETE_COMPLETED_TASK":
           
            return{
                ...state,
                completedTasks:state.completedTasks.filter((task)=>task.taskId!==action.payload)
            }
        default:
                return state
    }

}
export default taskReducer;