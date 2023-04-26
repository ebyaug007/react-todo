import { useState , useReducer, useContext } from "react"
import { MyContext } from "./MyContext"



const taskSet =(state,action) =>{
    if(action.type ==="TASK_INPUT")
        return {task : action.val}
    return {task:''}
}

export default function InputForm(props)
{
    //const [task , setTask] = useState('');


    const [taskState, dipatchTask] =useReducer(taskSet,{task:''});

    const {loggedIn,setLoggedIn} = useContext(MyContext);

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
    const loginHandler =()=>
    {
        setLoggedIn(!loggedIn);
    }
    return(
    <div>
    
    <form onSubmit={submitHandler}>
        <input type="text" value={taskState.task} placeholder="Enter Task" onChange={taskChangeHandler} required></input>
        <button>Add Task</button>
        
    </form>
    <label>User is logged in {!loggedIn && "NO"} {loggedIn && "YES"}</label>
     <button onClick={loginHandler}>{loggedIn  ? "Logout" : "Login"}</button>
    </div>
    )
}