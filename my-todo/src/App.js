import React, { useState } from 'react'
import './App.css'

function App() {
  const [todolist, Settodolist] = useState([])
  const [newtask, Setnewtask] = useState("")

  const handleChange = (e) => {
    Setnewtask(e.target.value)
  }

  const addtask = () => {
    Settodolist([...todolist, newtask])
  }

  const deletetask = (taskName) => {
    const newtodolist = todolist.filter((task) => task !== taskName);
    Settodolist(newtodolist)
  }
  return (
    <div>
      <h2>TODO-LIST</h2>
      <div className='task'>
        <input onChange={handleChange} />
        <button onClick={addtask}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task) => {
          return <div>
            <h1>{task}<button className='btn' onClick={() => deletetask(task)}>X</button></h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App