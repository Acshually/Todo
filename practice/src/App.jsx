import { useState ,useEffect} from 'react'
import TodoForm from './components/TodoForm'
import './App.css'
import { TodoProvider } from './Context/contextApi'
import TodoItems from './components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>
      [...prev,{...todo , id: Date.now()}]
    )
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=>
      prev.filter(prevTodo => prevTodo.id!==id)
    )
  }

  const updateTodo = (id,todo)=>{
    setTodos(prev=>
      prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo)
    )
  }

  const toggleComplete = (id)=>{
    setTodos(prev=>
      prev.map(prevTodo=>
        prevTodo.id === id ? {...prevTodo, isComplete:!prevTodo.isComplete} : prevTodo
      )
    )
  }

  //local storage 
  useEffect(() => {
    
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0) setTodos(todos)

  }, [])
  
  useEffect(() => {
    
  localStorage.setItem("todos",JSON.stringify(todos))
   
  }, [todos])

  
  
  return (
    <>
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <TodoForm/>
      <br />
      {todos.map(todo=>
        <TodoItems key={todo.id} todo={todo} />
      )}
    </TodoProvider>  
    </>
  )
}

export default App
