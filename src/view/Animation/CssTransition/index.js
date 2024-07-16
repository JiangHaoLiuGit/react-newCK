import React,{useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import './index.css'
import 'animate.css'

function MyTransition({visible, children} ){
    return <CSSTransition appear mountOnEnter in={visible} timeout={500} classNames={{
        exitActive:"animate__fadeOutLeft",
        exitDone:"exit-done",
        enterActive:"animate__fadeInRight",
        appearActive:"animate__fadeInRight"
    }}>
        {children}
    </CSSTransition>
}

function ComA(){
    return <h1 className='animate__animated animate__faster'>组件A</h1>
}

function ComB(){
    return <h1 className='animate__animated animate__faster'>组件B</h1>
}

export default function CssTransition(){
    const [hide , setHide] = useState(true)
    return <>
        <div className="box">
            <MyTransition visible={hide}>
                <ComA />
            </MyTransition>
            <MyTransition visible={!hide}>
                <ComB />
            </MyTransition>
        </div>
        <button onClick={()=>{
            setHide(!hide)
        }}>切换组件</button>
    </>
}