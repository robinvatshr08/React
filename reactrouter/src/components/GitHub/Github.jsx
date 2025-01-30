/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res=> res.json())
        .then(res=> setData(res))
    },[])
  return (
    <div className='bg-gray-500 text-3xl text-white text-center p-4 w-full h-130'>Github Followers {}: {data.followers}
    <img className='text-center' src={data.avatar_url} width={300}></img>
    </div>
  )
}

export default Github