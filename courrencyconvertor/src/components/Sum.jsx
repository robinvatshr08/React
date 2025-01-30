import React from 'react'

function Sum({first,second,setFirst,setSecond} ){
  return (
    <>
        <div className='  px-11 py-2 m-3.5 gap-x-4 justify-center '>
            <div className='rounded-lg w-100 h-20 bg-green-300 gap-x-3 text-2xl text-white-500 '>
                <input className='rounded-lg w-40 h-10 justify-center  bg-gray-300 text-2xl text-white-500 ' type="number" value={first} onChange={(e) => setFirst(Number(e.target.value))}></input>
                <input className='rounded-lg w-40 h-10 justify-center flex-wrap bg-gray-300 text-2xl text-white-500 ' type='number' value={second} onChange={(e) => setSecond(Number(e.target.value))}></input>
            </div>
        </div>
    </>
  )
}
export default Sum;
