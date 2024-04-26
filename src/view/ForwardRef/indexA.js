// forwardRef方式获取A函数组件中的dom元素
import React, { Component } from 'react'
function A(props,ref){
  console.log("props",props)
  console.log("ref",ref)
    return (
        <>
          <h1>我是A函数组件</h1>
          <input type='text' ref={ref}></input>
          <span>{props.aa}</span>
        </>
    )
}
const Newa = React.forwardRef(A)
export default class Test extends Component {
  handler = () => {
        console.log(this.refs)
        this.refA.current.focus()
    }
    refA = React.createRef()
    componentDidMount(){
      // 利用forwardRef获取函数组件中的某个dom元素!
      console.log(this.refA)
    }
  render() {
    return (
      <div>
        <h1>ref转发(获取函数组件中的dom元素)</h1>
        <Newa ref={this.refA} aa="获取函数组件中的dom元素"/>
        <p>
          <button onClick={this.handler}>点击获取函数组件中的Dom元素</button>
        </p>
      </div>
    )
  }
}
