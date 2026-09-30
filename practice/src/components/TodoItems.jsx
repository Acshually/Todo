import React, { useContext ,useState} from 'react'
import { todoContext } from '../Context/contextApi'

function TodoItems({todo}) {
    const {updateTodo,deleteTodo,toggleComplete} = useContext(todoContext)

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const edit=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggle=()=>{
        toggleComplete(todo.id)
    }

  return (
    <>
        <input type="checkbox" checked={todo.isComplete} onChange={toggle} />
        <input type="text" readOnly={!isTodoEditable} value={todoMsg} onChange={e=>setTodoMsg(e.target.value)} 
            className={`${todo.isComplete?"line-through font-light" : ""}`}/>
        <button onClick={()=>{
            if(todo.isComplete) return 
            if(isTodoEditable)
                edit()

            else setIsTodoEditable(prev=>!prev)
        }}>{ !isTodoEditable? "edit" : "save" }</button>
    </>
  )
}

export default TodoItems