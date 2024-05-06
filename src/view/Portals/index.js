import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'
function ComA(){
    return ReactDom.createPortal(<>
        <h1>ComA组件</h1>
        <ComB />
    </>,document.querySelector(".portals"))
}
function ComB(){
    return <>
        <h1>ComB组件</h1>
    </>
}
export default class Test extends Component {
  render() {
    return (
        // 注意这个点击事件,在ComA和ComB点击的时候也会触发,说明用了Portal的时候要注意他的点击事件是按照
        // react组件树中的顺序来冒泡的,而不是真实的dom树来的!!!!!
      <div className='appDiv' onClick={e=>{
        console.log("appDiv被点击",e.target)
      }}>
        <h1>App</h1>
        <ComA/>
      </div>
    )
  }
}
