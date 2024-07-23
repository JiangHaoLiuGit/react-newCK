import {CSSTransition} from 'react-transition-group'

import './index.css'
FadeTransition.defaultProps = {
    timeout:500
}
function enterNode(node,timer){
    node.style.transition = `opacity ${timer}ms ease 0s`;
}

function leaveNode(node,timer){
    node.style.transition = "";
}

export default function FadeTransition(props){
    console.log("props")
    console.log(props)
    return <>
        <CSSTransition
            {...props}
            classNames='fade'
            onEnter={node=>enterNode(node,props.timeout)}
            onEntered={node=>leaveNode(node,props.timeout)}
            onExit={node=>enterNode(node,props.timeout)}
            onExited={node=>leaveNode(node,props.timeout)}
        >
            {props.children}
        </CSSTransition>
    </>
}