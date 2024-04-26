// 普通方式获取类组件中的dom元素
import React, { Component } from 'react'
class B extends React.Component{
    refB = React.createRef()
    render(){
        return <>
          <h1>我是B类组件</h1>
          <input type='text' ref={this.refB}></input>
          <span>{this.props.aa}</span>
        </>
    }
}
export default class Test extends Component {
    handler = () => {
        this.refA.current.refB.current.focus()
    }
    refA = React.createRef()
    componentDidMount(){
      console.log(this.refA)
      console.log(this.refA.current.refB.current)
    }
  render() {
    return (
      <div>
        <h1>ref转发(获取类组件中的dom元素)</h1>
        <B ref="refB" ref={this.refA} aa="获取类组件中的dom元素"/>
        <p>
          <button onClick={this.handler}>点击获取函数组件中的Dom元素</button>
        </p>
      </div>
    )
  }
}
