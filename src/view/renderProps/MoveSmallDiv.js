import React from 'react'
import './index.css'
export default class MoveSmallDiv extends React.Component{
    state = {
        x:0,
        y:0,
    }
    refDiv = React.createRef()
    handlerMove = e => {
        // getBoundingClientRect()获取dom元素的坐标,坐标中有dom元素的长度高度,距离上,下,左,右的距离
        console.log(this.refDiv.current.getBoundingClientRect())
        const {x,y} = this.refDiv.current.getBoundingClientRect()
        // e.pageX 和e.clientX都可以获取距离左边的距离
        // e.pageX获取带有滚动条的长度
        // e.clientX会忽略滚动条的存在
        this.setState({
            x:e.pageX - x - 53,
            y:e.pageY - y - 53
        })
    }
    render(){
        return <>
            <div ref={this.refDiv} className='box' onMouseMove={this.handlerMove}>
                <div style={{
                    width:100,
                    height:100,
                    position:"absolute",
                    left:this.state.x,
                    top:this.state.y,
                    background:"red"
                }}>
                </div>
            </div>
        </>
    }
}