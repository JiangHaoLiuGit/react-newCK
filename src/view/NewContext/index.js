import React from 'react'
import './index.css'

const ctx = React.createContext()

class ChildB extends React.Component{
    // 不推荐这种用法,因为只能声明一个上下文,不支持多个
    static contextType = ctx
    // render中this.context.a可以访问上下文数据
    shouldComponentUpdate(){
        console.log("优化上下文")
        return false
    }
    render(){
        console.log("render")
        return (
            <div className='content'>
                <h1>子组件B</h1>
                <h3>ctx2数据:a:{this.context.a} , b:{this.context.b}</h3>
            </div>
        )
    }
}

export default class Test extends React.Component{
    state = {
        ctx:{
            a:1,
            b:"abc",
            ChangeA:(newA)=>{
                this.setState({
                    a:newA
                })
            }
        }
    }
    render(){
        return <div className='box'>
            <ctx.Provider value={this.state.ctx}>
                <div className='content'>
                    <h1>父组件</h1>
                    <h3>上下文数据:</h3>
                    <h3>a:{this.state.ctx.a} , b:{this.state.ctx.b}</h3>
                    <button onClick={()=>{
                        this.setState({})
                    }}>a+1</button>
                </div>
                <ChildB />
            

            </ctx.Provider>
        </div>
    }
}