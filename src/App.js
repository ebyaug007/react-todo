import { useState } from "react";
import DisplayTodo from "./DisplayTodo";
import InputForm from "./InputForm"
import { MyContext } from "./MyContext";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [todo, setTodo] = useState([]);

  const inputTaskHandler = (task) => {
    setTodo((prevTodo) => [...prevTodo, task]);
  }
  const editTaskHandler = (task) => {
    setTodo((prevTodo) => {
      return prevTodo.map(prevTask => {
        if (prevTask.id === task.id)
          prevTask.task = task.task
        return prevTask
      })
    })
  }
  const removeTaskHander = (task) => {
    const newTodoList = todo.filter((todoTask) => todoTask.id !== task.id);
    setTodo(newTodoList);
  }

    return (
      <div>
        <MyContext.Provider value={{loggedIn,setLoggedIn}}>
        <InputForm onInputTask={inputTaskHandler} />
        {
          todo.map((task) => {
            return (
              <li key={task.id} >
                <DisplayTodo task={task} onEditTask={editTaskHandler} onRemoveTask={removeTaskHander} />
              </li>
            )
          })
        }
        </MyContext.Provider>
      </div>
    )

  }