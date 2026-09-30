import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App(){

  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => ([...prev, { ...todo, id: Date.now() }])) 
  }
  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter(todo => todo.id !== id)))
  }
  const updateTodo = (id, todo) => {
    setTodos(prev => (prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo))) //DOUBT
  }
  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, isComplete: !prevTodo.isComplete } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))


  }, [todos])
  // console.log(JSON.stringify(todos));


  return (
    <Router>
      <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }} >
        <Navbar />
        <Routes>
          <Route path='/' element={
            <main className="todo-page">
              <section className="todo-workspace" aria-labelledby="todo-heading">
                <div className="todo-heading-row">
                  <h1 id="todo-heading">Your tasks</h1>
                  <span className="task-count">{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</span>
                </div>
                <TodoForm />
                <div className="todo-list">
                  {todos.length === 0 ? (
                    <p className="empty-state">No tasks yet. Add one above to get started.</p>
                  ) : (
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                  )}
                </div>
              </section>
            </main>} />

          <Route path='/about' element={<AboutPage/>} />        
          <Route path='/login' element={<Login/>} />        
        </Routes>
      </TodoProvider>
    </Router>
  )
}

export default App
