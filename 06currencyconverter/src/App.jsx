import { useState } from 'react'
import {InputBox}  from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [convertedAmount, setConvertedAmount]=useState(0)
  const [from,setFrom]=useState('USD')
  const [to,setTo]=useState('ETB')
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
    }
    const swap=()=>{
      setFrom(to)
      setTo(from)
      setAmount(Number(convertedAmount))
      setConvertedAmount(Number(amount))
  }
  return (
  <div className="bg-black w-full h-screen justify-center items-center bg-no-repeat bg-cover flex flex-wrap" style={{backgroundImage:'url(https://th.bing.com/th/id/R.fef9c0e3d3add43d7d1f2d1f8086401d?rik=BeX%2bamHJ8NFIYg&pid=ImgRaw&r=0)'}}>
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
<form onSubmit={(e)=>{
  e.preventDefault()
  convert()
}
}>
<div className="w-full mb-1">
<InputBox 
className=""
label="from"
amount={amount}
onchangeAmount={(amount)=>setAmount(amount)}
selectedCurrency={from}
oncurrencyChange={(currency)=>setFrom(currency)}
currencyOptions={options}
/>
</div>
<div className="w-full h-0.5 relative">
<button
className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
onClick={swap}
>Swap</button>
</div>

<div className="w-full mb-1">
<InputBox

className=""
label="to"
amountDisabled
amount={convertedAmount}
selectedCurrency={to}
oncurrencyChange={(currency)=>setTo(currency)}
currencyOptions={options}
/>
<button type='submit'
className='bg-blue-600 text-white px-4 py-3 rounded-lg w-full mt-4'
>convert  from {from.toUpperCase()} to {to.toUpperCase()}</button>
</div>
</form>
      </div>
    </div>
</div>
  )
}

export default App
