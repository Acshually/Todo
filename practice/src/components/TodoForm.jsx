import React , {useState,useContext} from "react";
import { todoContext } from "../Context/contextApi";


function TodoForm() {
        const [todo, setTodo] = useState("")
        const {addTodo} = useContext(todoContext)
        
        const add = (e)=>{
            e.preventDefault()
        
            if(!todo)return 
        
            addTodo({todo:todo , isComplete: false})
            setTodo("")
        }
  return (
    <>
    <form onSubmit={add}>
        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} placeholder="todo text !"/>
        <button type="submit">ADD</button>
    </form>
    </>
  )
}

export default TodoForm


// import React , {useState,useContext} from "react";
// import { todoContext } from "../Context/contextApi";

// const [todo, setTodo] = useState("")
// const {addTodo} = useContext(todoContext)

// const add = (e)=>{
//     e.preventDeafault()

//     if(!todo)return 

//     addTodo({todo:todo , isCompleted: false})
//     setTodo("")
// }

// return (
//     <>
//     <form onSubmit={add}>
//         <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} placeholder="todo text !"/>
//         <button type="submit">ADD</button>
//     </form>
//     </>
// )