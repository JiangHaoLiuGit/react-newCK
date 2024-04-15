import React from 'react'
import './index.css'

export default function Model(props){
    let ObjStyle = {
        bg:'rgba(0,0,0,.5)'
    }
    let dates = Object.assign({},ObjStyle,props)
    return(
        <>
            <div className='Model' onClick={
                (e)=>{
                    if(e.target.className == 'Model'){
                        props.close()
                    }
                }
            } style={{
                background:dates.bg
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