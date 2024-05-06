import React from 'react'
import './index.css'

export default function withMoveSmall(Com){
    return class Container extends React.Component{
        state = {
            x:0,
            y:0,
        }
        refDiv = React.createRef()
        handlerMove = e => {
            // getBoundingClientRect()获取dom元素的坐标,坐标中有dom元素的长度高度,距离上,下,左,右的距离
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
                <Com {...this.state} {...this.props}/>
            </div>
                
            </>
        }
    }
}