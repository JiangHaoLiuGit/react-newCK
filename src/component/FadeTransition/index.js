import {CSSTransition} from 'react-transition-group'

import './index.css'
FadeTransition.defaultProps = {
    timeout:500
}

export default function FadeTransition(props){
    return <>
        <CSSTransition
            {...props}
            classNames='fade'
            onEnter={node=>{
                node.style.transition = `opacity ${props.timeout}ms ease 0s`;
                if(props.onEntered){
                    props.onEntered()
                }
            }}
            onEntered={node=>{
                node.style.transition = "";
                if(props.onEntered){
                    props.onEntered()
                }
            }}
            onExit={node=>{
                node.style.transition = `opacity ${props.timeout}ms ease 0s`;
                
            }}
            onExited={node=>{
                node.style.transition = "";
                if(props.onExited){
                    props.onExited()
                }
            }}
        >
            {props.children}
        </CSSTransition>
    </>
}