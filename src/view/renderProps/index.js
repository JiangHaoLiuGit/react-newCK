import React from 'react'
// 1.0纯堆代码,效率最差的方式实现
import MoveSmallDiv from './MoveSmallDiv'
import MoveSmallCoor from './MoveSmallCoor'
export default class Test extends React.Component{
    render(){
        return <>
            <MoveSmallDiv />
            <MoveSmallCoor />
        </>
    }
}