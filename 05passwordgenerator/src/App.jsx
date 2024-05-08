import { useCallback,useEffect,useState,useRef} from "react"

function App() {
const [passsword,setPassword]=useState('')
const [length,setLength]=useState(6)
const [numberAllowed,setNumberAllowed]=useState(false)
const [characterAllowed,setCharacterAllowed]=useState(false)
const passwordgenerator=useCallback(()=>{
  let pass='';
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed)str+="0123456789"
  if(characterAllowed)str+="!@#$&*"
  for(let i=0;i<length;i++)
  {
    let index=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(index)
  }
  setPassword(pass)
},[length,numberAllowed,characterAllowed])
useEffect(()=>{
  passwordgenerator()
},[length,numberAllowed,characterAllowed])
const copyPasswordToclipboard=()=>{
  window.navigator.clipboard.writeText(passsword)
  passwordref.current?.select()
}
const passwordref=useRef()
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        className="outline-none py-1 px-3 w-full"
        value={passsword}
        placeholder="password"
        readOnly
        ref={passwordref}
        />
        <button className="bg-blue-700 px-3 py-0.5 text-white" onClick={copyPasswordToclipboard}>copy</button>
      </div>
      <div className="flex item-center gap-x-1 text-white">
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        name=""
         id=""
         onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor="length">Length:{length}</label>
          <input type="checkbox" 
        defaultChecked ={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        name="
        " id="" />
        <label htmlFor="number">Numbers</label>
        <input type="checkbox"
        defaultChecked={characterAllowed}
onChange={()=>{
  setCharacterAllowed((prev)=>!prev)
}}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  )
}

export default App
