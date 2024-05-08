import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

const TodItem = ({Todo}) => {
    const [isEditable,setIsEditable]=useState(false)
    const [todomsg,setTodomsg]=useState(Todo.todo)
    console.log(Todo)
    const {UpdateTodo,DeleteTodo,CompleteTodoToggle}=useTodo()
    const EditeTodo=()=>{
      UpdateTodo(Todo.id,{...Todo,todo:todomsg})
      setIsEditable(false)
    }
    const ToggleComplet=()=>{
      CompleteTodoToggle(Todo.id)
    }
  return (
    <div className={`flex border-black/10 rounded-lg px-3 py-1.5
     gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${Todo.complete?"bg-[#c6e9a7]":"bg-[#ccbed7]"}`}>
      <input type="checkbox"
      className='cursor-pointer'
      checked={Todo.complete}
      onChange={ToggleComplet}
      />
      <input type="text"
      className={`boorder text-black outline-none w-full bg-transparent rounded-lg ${isEditable?"border-black/10 px-2":"border-transparent"}`}
      value={todomsg}
      onChange={(e)=>setTodomsg(e.target.value)}
      readOnly={!isEditable}
      />

      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm
       border border-black/50 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
       onClick={()=>{
        if(Todo.complete)return
        if(isEditable)EditeTodo()
        else setIsEditable((prev)=>!prev)
       }
       }
       disabled={Todo.complete}
      >{isEditable?"save":"edite"}</button>
      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm
      border border-black/50 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
      onClick={()=>DeleteTodo(Todo.id)}
      >
delete
      </button>
    </div>
  )
}

export default TodItem