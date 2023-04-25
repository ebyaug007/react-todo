import { useState } from "react";

export default function DisplayTodo(props)
{
    const [edit ,setEdit] =useState(false)
    const [newTask, setNewTask] = useState("")
    const toggleEditHandler = () =>
    {
        setEdit(!edit);
        setNewTask(props.task.task);
    }
    const textEditHandler = (event) =>
    {
        setNewTask(event.target.value)
    }
    const toggleSaveHandler = () =>
    {
        setEdit(!edit);
        const editedTask = {task : newTask, id: props.task.id};
        props.onEditTask(editedTask);
        setNewTask("");
    }
    const task = props.task.task;
    return (<>
            {!edit && task}
            {edit && <input type="text" value={newTask} onChange={textEditHandler}></input>}
            {!edit && <button onClick={toggleEditHandler}>edit</button>}
            {edit && <><button onClick={toggleSaveHandler}>save</button> <button onClick={toggleEditHandler}>cancel</button></>}
        
    </>);
}