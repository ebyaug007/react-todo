import { useState } from "react"

export default function InputForm(props)
{
    const [task , setTask] = useState('');
    const submitHandler =(event) =>
    {
        event.preventDefault();
        const ranid = Math.random().toString();
        const finalTask = {task : task , id: ranid}
        props.onInputTask(finalTask);
        setTask('');
        
    }
    const taskChangeHandler =(event) =>
    {
        setTask(event.target.value);
    }
    return(
    <>
    InputForm
    <form onSubmit={submitHandler}>
        <input type="text" value={task} placeholder="Enter Task" onChange={taskChangeHandler}></input>
        <button>Add Task</button>
    </form>
    </>
    )
}