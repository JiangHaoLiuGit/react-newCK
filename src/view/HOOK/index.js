import React, { useState,useEffect } from 'react'

export default function Test(props){
  const [n , setN] = useState(1)
  const [count, setCount] = useState(10)
  useEffect(()=>{
    console.log("react")
  },[])
  return (
      <div>
        <h1>HOOK Function</h1>
        <h2>{n}</h2>
        <h2>{count}</h2>
      </div>
    )
}
