import React from 'react'
import './index.css'

const ctx1 = React.createContext()
const ctx2 = React.createContext()

function ChildA(props){
    
    return (
        <>
            <ctx2.Provider value={
                {
                    a:789,
                    b:"ooo",
                    changeTwo:newA => {
                        console.log(newA)
                    }
                }
            }>
                <div className='content'>
                    <h1>子组件A</h1>
                    <ctx1.Consumer>
                        {val => (
                            <>
                                <h3>
                                    a:{val.a} , b:{val.b}
                                </h3>
                                <ctx2.Consumer>
                                    {value => (
                                        <>
                                            <h3>context2数据:a:{value.a} , b:{value.b}</h3>
                                        </>
                                    )}
                                </ctx2.Consumer>
                                <button onClick={()=>{
                                    val.ChangeA(val.a+2)
                                }}>a+2</button>
                            </>
                        )}
                    </ctx1.Consumer>
                </div>
                <ChildB />
            </ctx2.Provider>
        </>
    )
}

class ChildB extends React.Component{
    // 不推荐这种用法,因为只能声明一个上下文,不支持多个
    // static contextType = ctx1
    // render中this.context.a可以访问上下文数据
    render(){
        return (
            <div className='content'>
                <h1>子组件B</h1>
                <ctx1.Consumer>
                    {val => (
                        <>
                            <h3>a:{val.a} , b:{val.b}</h3>
                            <ctx2.Consumer>
                                {value => (
                                    <>
                                        <h3>ctx2数据:a:{value.a} , b:{value.b}</h3>
                                        <button onClick={()=>{
                                            value.changeTwo(value.a + 3)
                                        }}>ctx2.a+3</button>
                                    </>
                                )}
                            </ctx2.Consumer>
                            <button onClick={()=>{
                                val.ChangeA(val.a+3)
                            }}>a+3</button>
                        </>
                    )}
                </ctx1.Consumer>
            </div>
        )
    }
}

export default class Test extends React.Component{
    state = {
        a:1,
        b:"abc",
        ChangeA:(newA)=>{
            this.setState({
                a:newA
            })
        }
    }
    render(){
        return <div className='box'>
            <ctx1.Provider value={this.state}>
                <div className='content'>
                    <h1>父组件</h1>
                    <h3>上下文数据:</h3>
                    <h3>a:{this.state.a} , b:{this.state.b}</h3>
                    <button onClick={()=>{
                        this.setState({
                            a:this.state.a+1
                        })
                    }}>a+1</button>
                </div>
                <ChildA />
            

            </ctx1.Provider>
        </div>
    }
}