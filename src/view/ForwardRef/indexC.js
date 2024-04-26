// forwardRef方式获取C类组件中的dom元素
import React, { Component } from 'react'
class C extends React.Component{
  render(){
    return <>
      <h1>我是C类组件</h1>
      <input type='text' ref={this.props.abc}></input>
      <span>{this.props.aa}</span>
    </>
  }
}
// 核心:包装一层就可以了
const Newc = React.forwardRef((props,ref) => {
  return <C {...props} abc={ref}/>
})
export default class Test extends Component {
    handler = () => {
      this.refC.current.focus()
    }
    refC = React.createRef()
    componentDidMount(){
      console.log(this.refC)
    }
  render() {
    return (
      <div>
        <h1>ref转发(获取类组件中的dom元素)</h1>
        <Newc ref={this.refC} aa="获取类组件中的dom元素"/>
        <p>
          <button onClick={this.handler}>点击获取函数组件中的Dom元素</button>
        </p>
      </div>
    )
  }
}
