import React,{Component} from 'react'
// 考点:加key和不加key有什么区别
// 没有加key的时候增加为什么增加到了末尾,用的是在头部添加的方法,
// 原因分析
// 更新比对阶段:旧节点 : (ComA 2)    (ComA 4)
// 新节点: (ComA 1)  (ComA 2)  (ComA 4)
// 旧(ComA 2) VS 新(ComA 1) => 旧(ComA 2)发现类型没有变,都是类组件ComA,这种情况会完全重用之前的对象,所以不会变用旧节点
// 旧(ComA 4) VS 新(ComA 2) => 旧(ComA 4)
// 旧(空节点) VS 新(ComA 4) => 创建新的类组件(ComA 1(这个1是默认值)) 
// 综上所述 最终结果旧(ComA 2) 旧(ComA 4) 新(ComA 1) => (ComA 2) (ComA 4) (ComA 1)

// 加了key后会正常追加到后面
// 旧很简单了,寻找key,如果有的话那就不变
// 更新比对阶段:旧节点 : (ComA key=1)    (Com key=2)
// 新节点: (ComA key=3) (ComA key=1)    (Com key=2)
// 结果就是 新(ComA) (ComA key=1)    (Com key=2) 完全符合预期结果!!!

class ComA extends React.Component{
    state = {
        n:1
    }
    render(){
        return <p>
            <span>{this.state.n}</span>
            <button onClick={()=>{
                this.setState({
                    n:this.state.n+1
                })
            }}>
                n+1
            </button>
        </p>
    }
}
export default class App extends React.Component{
    // 有key的时候会正常添加
    // state = {
    //     arr:[<ComA key={1}/>,<ComA key={2}/>],
    //     nextId:3
    // }
    // render(){
    //     let items = this.state.arr.map(it => (<li key={it}>{it}</li>))
    //     return (
    //         <div>
    //             {this.state.arr}
    //             <button onClick={()=>{
    //                 this.setState({
    //                     arr:[<ComA key={this.state.nextId}/>,...this.state.arr],
    //                     nextId:this.state.nextId+1
    //                 })
    //             }}>增加</button>
    //         </div>
    //     )
    // }
    // 没有key的时候会向末尾添加
    state = {
        arr:[<ComA/>,<ComA/>],
    }
    render(){
        let items = this.state.arr.map(it => (<li>{it}</li>))
        return (
            <div>
                {this.state.arr}
                <button onClick={()=>{
                    this.setState({
                        arr:[<ComA/>,...this.state.arr]
                    })
                }}>增加</button>
            </div>
        )
        
    }
}
