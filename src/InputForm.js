import { useState , useReducer } from "react"

const taskSet =(state,action) =>{
    if(action.type ==="TASK_INPUT")
        return {task : action.val}
    return {task:''}
}

export default function InputForm(props)
{
    //const [task , setTask] = useState('');

    const [taskState, dipatchTask] =useReducer(taskSet,{task:''});

    const submitHandler =(event) =>
    {
        event.preventDefault();
        const ranid = Math.random().toString();
        const finalTask = {task : taskState.task , id: ranid}
        props.onInputTask(finalTask);
        //setTask('');
        dipatchTask({type:"RESET"})
        
    }
    const taskChangeHandler =(event) =>
    {
        dipatchTask({type:"TASK_INPUT", val:event.target.value})
        //setTask(event.target.value);
    }
    return(
    <div>
    
    <form onSubmit={submitHandler}>
        <input type="text" value={taskState.task} placeholder="Enter Task" onChange={taskChangeHandler} required></input>
        <button>Add Task</button>
    </form>
    </div>
    )
}