


function InputBox({
        label,
        amount,
        onChangeAamount,
        currencyoptions,
        selectedCurrency="usd",
        onCurrencyChange,})
{
  return (
    <div className='w-full h-screen  wrap justify-center bg-gray-600 text-white rounded px-5 py-5'>
      <div>
        <label >{label} label</label>
        <input type="number" className='bg-red-500'
        value={amount} 
        onChange={(e)=> onChangeAamount && onChangeAamount(Number(e.target.value))}/>
      </div>

      <div> 
        <p>select currency</p>
        
        <select name="" id=""
          value={selectedCurrency}
          onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        >
        {currencyoptions.map((currency)=>{
          <option key={currency} value="currency">
            {currency}
          </option>
          
        })}
          
        </select>
      </div>
    </div>
  )
}

export default InputBox