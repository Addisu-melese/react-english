import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './componenets/TodoForm'
import TodItem from './componenets/TodItem'

const App = () => {
  const [Todos,setTodo]=useState([])
  const AddTodo=(todo)=>{
    setTodo((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const UpdateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevtodo)=>(prevtodo.id===todo.id?todo:prevtodo)))
  }
  const DeleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((prevetodo)=>prevetodo.id!==id))
  }
  const CompleteTodoToggle=(id)=>{
    setTodo((prev)=>
      prev.map((prevetodo)=>
        prevetodo.id===id?
          {...prevetodo,complete:!prevetodo.complete}:
          prevetodo)
  )
  }
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('todolocalname'))
    if(data&&data.length>0){
    setTodo(data)
}
  },[])
  useEffect(()=>{
    localStorage.setItem("todolocalname",JSON.stringify(Todos))
  },[Todos])
  return (
    <TodoProvider value={{Todos,AddTodo,UpdateTodo,DeleteTodo,CompleteTodoToggle}}>
      <div className='bg-[#172842] min-h-screen py-8'>
<div className='w-full max-w-screen-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
  <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
    Manage your Todos
  </h1>
<div className='mb-4'>

<TodoForm/>
</div>
<div className='flex flex-wrap gap-y-3'>
{
        Todos.map((todo)=>(
          <div key ={todo.id}
          className='w-full'
          >
            <TodItem Todo={todo}/>

          </div>
        ))
      }
</div>
</div>
      </div>
    </TodoProvider>
  )
}

export default App