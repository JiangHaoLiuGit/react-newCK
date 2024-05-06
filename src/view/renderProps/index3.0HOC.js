import React from 'react'
// 3.0用HOC实现
import withMoveSmall from './withMoveSmall.js'
const TestDiv = withMoveSmall(smallDiv)
const TestCoor = withMoveSmall(smallCoor)
export default class Test extends React.Component{
    render(){
        return <>
            <TestDiv/>
            <TestCoor/>
        </>
    }
}

function smallDiv(props){
    return <>
        <div style={{
            width:100,
            height:100,
            position:"absolute",
            left:props.x,
            top:props.y,
            background:"yellow"
        }}></div>
    </>
}

function smallCoor(props){
    return <>
        <div>横坐标x:{props.x},纵坐标y:{props.y}</div>
    </>
}