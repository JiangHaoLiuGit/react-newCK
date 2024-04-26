// 用forwardRef()获取高阶组件最深层次的dom元素
import React from 'react'
import {A} from '../../component/TestAandB'
import {WithTest} from '../../HOC/withTest'
let ComA = WithTest(A)

export default class Test extends React.Component{
  abc = React.createRef()
    handler = () => {
      this.abc.current.refInput.current.focus()
    }
    render(){
      return <>
          <ComA ref={this.abc} isLogin={true} a={3}/>
          {/*  */}
          <button onClick={this.handler}>点击</button>
      </>
    }
}
