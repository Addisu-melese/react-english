import { useState } from "react"

function App() {
const [counter,setCounter]=useState(90)
const addValue=()=>{
  setCounter((prevValue)=>prevValue+1)
  setCounter((prevValue)=>prevValue+1)
  setCounter((prevValue)=>prevValue+1)
}
  return (
  <>
  <div>Counter={counter}</div>
  <button onClick={addValue}>add</button>
  </>
  )
}

export default App
