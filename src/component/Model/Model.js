import React from 'react'
import './Model.css'

export default function Model(props){
    return <>
        <div className='modelDiv' style={{display:props.show?'block':'none'}}>
            <p>加载中...</p>
        </div>
    </>
}