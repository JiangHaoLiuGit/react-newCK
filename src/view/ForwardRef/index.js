// 用forwardRef()获取高阶组件最深层次的dom元素
import React from 'react'
import {A} from '../../component/TestAandB'
import {WithTest} from '../../HOC/withTest'
let ComA = WithTest(A)

export default class Test extends React.Component{
  // 1.0 命名refA为想要控制的dom
  refA = React.createRef()
  handler = () => {
    // 7.0 访问根组件的dom元素
    this.refA.current.refInput.current.focus()
  }
  render(){
    return <>
    {/* // 2.0 refA传给高阶组件ComA */}
    {/* 后续在HOC/withTest */}
        <ComA ref={this.refA} isLogin={true} a={3}/>
        {/*  */}
        <button onClick={this.handler}>点击</button>
    </>
  }
}
