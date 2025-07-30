import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => { 
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
    setNewTask("");
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const toggleComplete = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? {...task, completed : !task.completed} : task ))
  }

  return(
    <div className="App">
      <div className="Heading"><h1>To Do List</h1></div>
      <div className="addTask">
      <input 
        className="input" 
        value={newTask}
        onChange={handleChange} 
        placeholder="Enter a new task..."
      />
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id} className="task">
              <h3 className={task.completed ? 'completed' : ''}>{task.taskName}</h3>
              <button onClick={() => toggleComplete(task.id)}>{'\u2713'}</button>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;
