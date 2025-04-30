import React from 'react'
import './Model.css'

export default function Model(props){
    console.log(props);
    let item = props.show ? (<div className='modelDiv'>
        <p>加载中...</p>
    </div>):''
    return <>
        {item}
    </>
}