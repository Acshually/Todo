import React, { useContext ,useState} from 'react'
import { todoContext } from '../context/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo}=useContext(todoContext)

  
  const add = (e)=>{
     e.preventDefault()
    if(!todo) return 

    addTodo({todo:todo , isComplete:false })
    setTodo("")
}
  return (
    <form onSubmit={add} className="todo-form">
      <input
        type="text"
        placeholder="Add a task"
        aria-label="Add a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  )
}

export default TodoForm
