import React, { useState, useContext } from 'react'
import { todoContext } from '../context/TodoContext'

function TodoItem({todo}) {
    const{updateTodo,toggleComplete,deleteTodo} = useContext(todoContext)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const toggle = ()=>{
        toggleComplete(todo.id)
    }
    const editTodo = () =>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
  return (
    <div className={`todo-row${todo.isComplete ? ' is-complete' : ''}`}>
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggle}
        aria-label={`Mark ${todoMsg} ${todo.isComplete ? 'incomplete' : 'complete'}`}
      />
      <input
        type="text"
        readOnly={!isTodoEditable}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`todo-text${isTodoEditable ? ' is-editing' : ''}`}
        aria-label="Task name"
      />
      <button onClick={()=>{
        if(todo.isComplete)return
        if(isTodoEditable){
            editTodo()
        }
        else {setIsTodoEditable((prev)=>!prev)}
        
      }}
      disabled={todo.isComplete}
      className="task-action"
      >{isTodoEditable ? 'Save' : 'Edit'}</button>
      <button className="task-action delete-action" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
