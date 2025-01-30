import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'


function App() {
  const [password, setPassword] = useState("")
  const [range,setRange]= useState(8)
  const [number,setNumber]=useState(false)
  const [specialchar,setSpecialchar]=useState(false)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="qwertyuioplkjhgfdsazxcvbnmQWASEDRFTGYHUJIKOLPMNBVCXZ"
    if(number){
      str+="1234567890"
    }
    if(specialchar){
      str+="!@#$%^&*(){}:;?/><|"
    }
    for(let i=1;i<=range;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }

    setPassword(pass)
  },[range,number,specialchar,setPassword])

  useEffect(()=>{
    passwordGenerator()
  } ,[range,number,specialchar,passwordGenerator])

  //useRef Hook
   const passRef=useRef()

  const handleCopy =useCallback( () => {
    if (password) {
      passRef.current?.select();
     // passRef.current?.setSelectionRange(0,3);
      window.navigator.clipboard.writeText(password).then(() => {        
        alert("Text copied to clipboard!");
      });
    }
  },[password])


  return (
    <>
    <div className=' w-full max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
            readOnly 
            placeholder='passwond'
            value={password}
            ref={passRef}
            className='outline-none w-full py-1 px-3 bg-gray-400'
        />
        <button className='bg-green-500 text-yellow-700' 
           onClick={handleCopy}>Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-4 '>
        <input type="range"
          min={8}
          max={100} 
          value={range}
          onChange={(e)=>{
            setRange(e.target.value)
          }}
        /> 
        <label>length :({range})</label>
        <input type="checkbox"
          defaultChecked={number}
          onChange={()=>{
            setNumber((prev)=> !prev);
          }} 
        />
        <label>Number</label>
    
        <input type="checkbox" 
            defaultChecked={specialchar}
            onChange={()=>{
              setSpecialchar((prev)=> ! prev);
            }} 
        /> 
        <label>Special Character</label>
      </div>
    </div>
  </>
  )
}

export default App
