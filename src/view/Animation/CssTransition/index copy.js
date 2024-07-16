import React,{useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import './index.css'
export default function CssTransition(){
    const [hide , setHide] = useState(false)
    return <>
        <CSSTransition in={hide} classNames="my-node" timeout={200}>
            {() => (
                <h1>css Transition</h1>
            )}
        </CSSTransition>
        <button onClick={()=>{
            setHide(!hide)
        }}>切换</button>
    </>
}