import React,{useState} from 'react'
import {SwitchTransition , CSSTransition } from 'react-transition-group'
import 'animate.css'
import './index.css'

export default function SwitchTransitionCom(){
    let [swit , setSwitch] = useState(true)
    return <div className='box'>
        <SwitchTransition>
            <CSSTransition appear timeout={800} key={swit} classNames={{
                exit:"animate__bounceOut",
                enter:"animate__bounceIn",
                appear:"animate__bounceIn"
            }}>
                <h1 className='animate__animated animate__fast'>{swit?"项目一":"项目二"}</h1>
            </CSSTransition>
        </SwitchTransition>
        <button onClick={()=>{
            setSwitch(!swit)
        }}>切换</button>
    </div>
}
