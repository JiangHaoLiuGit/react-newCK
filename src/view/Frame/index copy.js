import React ,{useEffect}from 'react'
import './index.css'
// window.requestAnimationFrame用法
let txt = null
let start = null
function frame(timeStart){
    if(start != null){
        start = timeStart
    }
    txt.style.transform = `translateX(${(timeStart - start)*0.01}px)`
    if(timeStart - start < 10000){
        window.requestAnimationFrame(frame)
    }
    
}
export default function Test() {
    useEffect(()=>{
        console.log("啊")
        console.log(txt)
        window.requestAnimationFrame(frame)
    },[])
  return (
    <div id='frame' ref={el => txt = el}>
      
    </div>
  )
}
