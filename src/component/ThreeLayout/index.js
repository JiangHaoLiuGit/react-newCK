import React from 'react'
import './index.css'

export default function ThreeLayout(props){
    let defaultStyle ={
        leftWidth:200,
        rightWidth:200,
        minContent:800,
        padding:0,
    }
    let dates = Object.assign({},defaultStyle,props)
    return(
        <>
            <div className="three-layout">
                <div className="content" style={{
                    minWidth:dates.minContent
                }}>
                    {props.children}
                </div>
                <div className='left' style={{
                    width:dates.leftWidth,
                    marginRight:dates.padding
                }}>
                    {props.left}
                </div>
                <div className='right' style={{
                    width:dates.rightWidth,
                    marginLeft:dates.padding
                }}>
                    {props.right}
                </div>
            </div>
        </>
    )
}