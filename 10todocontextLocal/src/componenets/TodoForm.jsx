import React, { useState } from 'react'
import {useTodo} from "../contexts/Index"
const TodoForm = () => {
    const [todo,setTodo]=useState("")
    const {AddTodo}=useTodo()
    const Add=()=>{
        if(!todo)return
        AddTodo({todo:todo,complete:false})
        setTodo("")
    }
  return (
    <form onSubmit={Add}>
<input 
type='text'
className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2.5'
placeholder='whrite here todo'
value={todo}
onChange={(e)=>setTodo(e.target.value)}
/>
<button type="submit"
className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
>Add</button>
    </form>
  )
}

export default TodoForm