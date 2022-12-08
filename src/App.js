import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newTodoList = [...todoList, task];
    setToDoList(newTodoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(newTodoList);
  };

  const completedTask = (id) => {
    setToDoList(
      todoList.map((task) => {
        if(task.id === id){
          return {...task, completed: true};
        }else{
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
      {/* top part to add the task  */}
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* bottom part where task is added */}
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completedTask={completedTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
