import React from 'react'
import './index.css'
import propTypes from 'prop-types'

Model.defaultProps = {
    bg:'rgba(0,0,0,.5)'
}
Model.propTypes = {
    bg:propTypes.string.isRequired,
    close:propTypes.func,
    children:propTypes.node
}
export default function Model(props){
    
    return(
        <>
            <div className='Model' onClick={
                (e)=>{
                    if(e.target.className == 'Model'){
                        props.close()
                    }
                }
            } style={{
                background:props.bg
            }}>
                <div className='content'>
                    <div>
                        {props.children || '空'}
                    </div>
                    <button onClick={props.close}>关闭按钮</button>
                </div>
            </div>
        </>
    )
}