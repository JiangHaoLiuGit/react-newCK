import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

ThreeLayout.defaultProps = {
    leftWidth:200,
    rightWidth:200,
    minContent:800,
    padding:0,
}
ThreeLayout.propTypes = {
    leftWidth:PropTypes.number,
    rightWidth:PropTypes.number,
    minContent:PropTypes.number,
    padding:PropTypes.number,
    children:PropTypes.node,
    left:PropTypes.node,
    right:PropTypes.node,
}
export default function ThreeLayout(props){
    return(
        <>
            <div className="three-layout">
                <div className="content" style={{
                    minWidth:props.minContent
                }}>
                    {props.children}
                </div>
                <div className='left' style={{
                    width:props.leftWidth,
                    marginRight:props.padding
                }}>
                    {props.left}
                </div>
                <div className='right' style={{
                    width:props.rightWidth,
                    marginLeft:props.padding
                }}>
                    {props.right}
                </div>
            </div>
        </>
    )
}