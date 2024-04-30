import React from 'react'
import PropTypes from 'prop-types'

function ChildA(props,context){
    return <>
        <h1>ChildA</h1>
        <p>函数组件A上下文数据=></p>
        <h2>a:{context.a},b:{context.b}</h2>
        <button onClick={()=>{
            console.log(context)
            context.changeA && context.changeA(context.a+2)
        }}>函数组件A改变</button>
        <ChildB />
    </>
}
ChildA.contextTypes = {
    a:PropTypes.number,
    b:PropTypes.string,
    changeA:PropTypes.func
}

class ChildB extends React.Component{
    // 3.0 子组件定义上下文数据数据
    static contextTypes = {
        a:PropTypes.number,
        b:PropTypes.string,
        changeA:PropTypes.func
    }
    // 4.0 构造器中第二个参数获取参数
    // super(props)这里有弊端,当context更新后constructor是不会更新的此时state还是旧的上下文数据
    // 所以可以这么写super(props,context),或者不写constructor也行,默认不写也会当他写过,可以直接用
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <>
            <p>
                ChildB
            </p>
            <p>类组件B上下文数据 =></p>
            <p>a:{this.context.a}</p>
            <p>b:{this.context.b}</p>
            <button onClick={()=>{
                this.context.changeA && this.context.changeA(this.context.a+2)
            }}>类组件B改变</button>
        </>
    }
}

export default class Test extends React.Component{
    // 1.0 定义contenxt类型
    static childContextTypes = {
        a:PropTypes.number,
        b:PropTypes.string,
        changeA:PropTypes.func
    }
    state = {
        a:123,
        b:"abc"
    }
    // 2.0 调用函数定义上下文数据
    // componentDidMount之前触发,以及后续props或者state数据变了也会重新触发
    getChildContext(){
        return {
            a:this.state.a,
            b:this.state.b,
            changeA:(newA) => {
                this.setState({
                    a:newA
                })
            }
        }
    }
    render(){
        return <>
            <h1>
                oldContext
            </h1>
            <h1>父组件a:{this.state.a}</h1>
            <button onClick={()=>{
                this.setState({
                    a:this.state.a + 1
                })
            }}>父组件改变</button>
            <ChildA></ChildA>
        </>
    }
}