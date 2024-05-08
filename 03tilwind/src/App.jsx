import Card from "./componenets/Card"

function App() {
const myarray=[1,2,3,4]
  return (
    <>    
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Tilwind</h1>
    <Card username="Addisu" post="signed"/>
    <Card array={myarray}/>
    <Card/>
    </>
  )
}
export default App
