import { useState } from "react";

export default function DisplayTodo(props)
{
    const [edit ,setEdit] =useState(false)
    const [completed, setCompleted] = useState(false)
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
    const toggleCompletedHandler = () =>
    {
        setCompleted(!completed);
    }
    const toggleRemoveHandler = () =>
    {
        props.onRemoveTask(props.task);
    }
    const task = props.task.task;
    return (<>
            {!edit && !completed && task}
            {completed && <s>{task}</s>}
            {edit && !completed && <input type="text" value={newTask} onChange={textEditHandler}></input>}
            {!edit && !completed && <button onClick={toggleCompletedHandler}>Completed</button>}
            {!edit && !completed && <button onClick={toggleEditHandler}>edit</button>}
            {edit && !completed && <><button onClick={toggleSaveHandler}>save</button> <button onClick={toggleEditHandler}>cancel</button></>}
            <button onClick={toggleRemoveHandler}>remove</button>        
    </>);
}