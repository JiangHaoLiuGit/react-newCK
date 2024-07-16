import React,{useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import './index.css'

function ComA({visible}){
    // appear mountOnEnter 
    return <CSSTransition appear mountOnEnter in={visible} timeout={1000}>
        {() => (
            <h1>组件A</h1>
        )}
    </CSSTransition>
}

function ComB({visible}){
    // mountOnEnter
    return <CSSTransition mountOnEnter in={visible} timeout={1000}>
        {() => (
            <h1>组件B</h1>
        )}
    </CSSTransition>
    // return <h1 className='comB'>组件B</h1>
    // return <h1 className='comB'>组件B</h1>
    
}

export default function CssTransition(){
    const [hide , setHide] = useState(true)
    return <>
        <div className="box">
            <ComA visible={hide}/>
            <ComB visible={!hide}/>
        </div>
        <button onClick={()=>{
            setHide(!hide)
        }}>切换组件</button>
    </>
}