import {useId} from 'react'
const InputBox=({
    className="",
    label="",
    amountDisabled=false,
    amount=0,
    onchangeAmount,
    selectedCurrency='USD',
    oncurrencyChange,
    currencyDisabled=false,
    currencyOptions=[]
})=>{
    const id=useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div>
                <label htmlFor={id} className="text-black/40  mb-2 inline-block">{label}</label>
                <input
                id={id}
                type="number"
                className="w-full outline-none bg-transparent py-1.5"
                placeholder="Amount"
                disabled={amountDisabled}
                value={amount}
                onChange={(e)=>{
                    onchangeAmount&&onchangeAmount(Number(e.target.value))
                }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                className="rounded-lg py-1 px-1 bg-gray-100 cursor-pointer outline-none"
                value={selectedCurrency}
                onChange={(e)=>{
                    oncurrencyChange&&oncurrencyChange(e.target.value)
                }}
                disabled={currencyDisabled}
                >
                {
                    currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>{currency}</option>
                    ))
                }
                </select>
            </div>
        </div>
    )
}
export default InputBox