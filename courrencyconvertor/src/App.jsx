//import InputBox from './components/InputBox'
import './App.css'
import { useState } from 'react'
//import useCurrencyInfo from "./hooks/useCurrencyInfo"
import Sum from "./components/Sum"


function App() {
  // const [amount,onChangeAmount]=useState(0);
  
  // const [from,setFrom]=useState("usd")
  // const [to,setTo]=useState("inr")
  // const [convertedAmount,setConvertedAmount]=useState(0)
  // const currencyinfo=useCurrencyInfo(from)

  // const options =Object.keys(currencyinfo)
  // const swap=()=>{
  //   setFrom(to)
  //   setTo(from)
  //   setConvertedAmount(amount)
  //   onChangeAmount(convertedAmount)
  // }
  // const convert=()=>{
  //   setConvertedAmount(amount*currencyinfo[to])
  // }
  const [first,setFirst]=useState(10)
  const [second,SetSecond]=useState(20)
  const [sum,setSum]=useState(0)
   const calculate=()=>{
      let ans=first+second
      setSum(ans)
   }
  return (
    <>
      <div className='w-full '>
        <Sum first={first} second={second} setFirst={setFirst} setSecond={SetSecond}></Sum>
      </div>
      
      <div className=' px-11 py-5 h-30 w-100 wrap flex-auto gap-3 rounded-lg   m-5  bg-green-300 gap-x-3 text-2xl text-white-500'>
        <button onClick={calculate} 
        className='bg-blue-300 text-white py-2 p-2'
        > Click to Add </button>
        <input type="number" 
        value={sum}/>
      </div>
    </>
  )
}

export default App
