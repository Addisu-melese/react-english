import { createContext, useContext } from "react";

export const TodoContext=createContext({
 Todos:[{
    id:1,
    todo:'Todo Message',
    complete:false    
 }],
 AddTodo:(todo)=>{},
 UpdateTodo:(id,todo)=>{},
 DeleteTodo:(id)=>{},
 CompleteTodoToggle:(id)=>{}
})
export const useTodo = () => {return useContext(TodoContext)}
export const TodoProvider=TodoContext.Provider