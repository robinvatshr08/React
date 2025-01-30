import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='flex  justify-center w-full h-screen duration-200 text-white'
      style={{backgroundColor:color}}>
        <h1>Robin vats</h1></div>
        <div className=' flex fixed  flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-between rounded-3xl px-4 py-3 gap-5 shadow-lg'> 
              <button className='outline-none px-4 py-1 rounded-full     text-white shadow-lg'
                style={{backgroundColor:"red"}} 
                onClick={()=> setColor("red")}>Red
              </button>
              <button className='outline-none px-4 py-1 rounded-full     text-white shadow-lg'
                style={{backgroundColor:"blue"}}
                onClick={()=> setColor("blue")} >Blue
              </button>
              <button className='outline-none px-4 py-1 rounded-full     text-white shadow-lg'
                style={{backgroundColor:"green"}} 
                onClick={()=> setColor("green")}>Green
              </button>
          </div>
        </div>
    </>
  )
}

export default App
