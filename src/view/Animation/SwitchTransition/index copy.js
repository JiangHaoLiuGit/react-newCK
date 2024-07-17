import React,{useState} from 'react'
import {SwitchTransition , CSSTransition } from 'react-transition-group'

import './index.css'

export default function SwitchTransitionCom(){
    let [swit , setSwitch] = useState(true)
    return <div className='box'>
        <SwitchTransition mode='out-in'>
            <CSSTransition appear timeout={800} key={swit}>
                <h1>{swit?"项目一":"项目二"}</h1>
            </CSSTransition>
        </SwitchTransition>
        <button onClick={()=>{
            setSwitch(!swit)
        }}>切换</button>
    </div>
}
