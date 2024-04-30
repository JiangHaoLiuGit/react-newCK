import React from 'react'
import PropTypes from 'prop-types'
const types = {
    a:PropTypes.number,
    b:PropTypes.string,
}
class ChildA extends React.Component{
    static contextTypes = {
        ...types,
        changeA:PropTypes.func
    }
    static childContextTypes = {
        a:types.a,
        c:PropTypes.string
    }
    
    getChildContext(){
        return{
            a:789,
            c:"ccc"
        }
    }
    render(){
        return <>
            <h1>ChildA</h1>
            <p>函数组件A上下文数据=></p>
            {/* 这里很坑,获取的是父组件的context,而不是自己的context */}
            <h2>a:{this.context.a},b:{this.context.b}</h2>
            <button onClick={()=>{
                this.context.changeA && this.context.changeA(this.context.a+2)
            }}>函数组件A改变</button>
            <ChildB />
        </>
    }
}

class ChildB extends React.Component{
    // 3.0 子组件定义上下文数据数据
    static contextTypes = {
        ...types,
        changeA:PropTypes.func,
        c:PropTypes.string
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
            <p>c:{this.context.c}</p>
            <button onClick={()=>{
                // 神奇的事情,这里的a是变成789(用的ChildA的上下文),childA和父组件中显示的a都是791
                // !!!因为791是父组件的数据a,所以childA和父组件的值显示是791,并且点击多次都是791!
                // 因为childB用的是childA的上下文,childB改变的时候是childA的上下文+2,因为childA的上下文不变
                // 所以一直是791!!!这个是旧版的上下文
                this.context.changeA && this.context.changeA(this.context.a+2)
            }}>类组件B改变</button>
        </>
    }
}

export default class Test extends React.Component{
    // 1.0 定义contenxt类型
    static childContextTypes = {
        ...types,
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