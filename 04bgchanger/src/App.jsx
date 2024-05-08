import { useState } from "react"

function App() {
const [color,setColor]=useState("olive")
// function ChangeColor(color){
//   setColor(color)
// }
  return (
    <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="bottom-12 fixed flex justify-center inset-x-0 px-2">
        <div className="flex justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          <button 
          className="px-4 py-1 shadow-lg rounded-full text-white bg-green-500"
          onClick={()=>setColor("green")}>green</button> <button 
          className="px-4 py-1 shadow-lg rounded-full text-white bg-red-500"
          onClick={()=>setColor("red")}>red</button> <button 
          className="px-4 py-1 shadow-lg rounded-full text-white bg-black"
          onClick={()=>setColor("black")}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
