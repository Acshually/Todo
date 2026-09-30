import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[{
        id:1,
        Todo:"DO DSA",
        isComplete:false
    }],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete: (id)=>{}

})

export const TodoProvider = todoContext.Provider