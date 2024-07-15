import React,{useState} from 'react'
import {Transition} from 'react-transition-group'

import './index.css'

export default function Transitions(){
    const [inProp , setInProp] = useState(false)
    return <>
    {/* timeout 代表这个时间后状态由entering => entered */}
        <Transition in={inProp} timeout={2000}
            addEndListener={(node,done)=>{
                node.addEventListener("transitionend",()=>{
                    console.log("过渡结束了")
                },{once:false})
            }}
        >
            {state=>{
                console.log(state)
                return <div className={`fade fade-${state}`}>
                    I,m a fade Transition
                </div>
            }}
        </Transition>
        <button onClick={()=>{setInProp(!inProp)}}>
            Click to Enter
        </button>
    </>
}