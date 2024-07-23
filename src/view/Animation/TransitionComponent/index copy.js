import React ,{useState}from 'react'
import FadeTransition from '../../../component/FadeTransition'
import {SwitchTransition} from 'react-transition-group'

export default function TransitionComponent(){
    const [hide , setHide] = useState(true)
    return <>
        <FadeTransition appear timeout={1000} in={hide}>
            <h1>我是猪</h1>
        </FadeTransition>
        <button onClick={()=>{setHide(!hide)}}>显示/隐藏</button>
    </>
}