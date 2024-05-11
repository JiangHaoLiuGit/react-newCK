import React,{Component} from 'react'
// import Test from './view/Rendering1'
// 考点:1新节点渲染(类组件生命周期)
// 数据变化后react如果更新
// 旧 <div><ComB></ComB></div>
// 新 <ComA></ComA>
// 新旧节点不同的情况下,会先创建新节点组件ComA > 销毁旧的ComB > 执行后续步骤127行1到6步!!!
export default class App extends React.Component{
    state = {
        a:1,
    }
    render(){
        if(this.state.a == 1){
            return(
                <div>
                    <ComB />
                    <button onClick={()=>{
                        this.setState({
                            a:2
                        })
                    }}>改变</button>
                </div>
            )
        }else{
            return (
                <ComA />
            )
        }
        
    }
}

class ComA extends Component{
    state = {}
    componentDidMount(){
        console.log("新组件挂载 ComA")
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps ComA")
        return null
    }
    componentWillUnmount(){
        console.log("组件卸载 ComA")
    }
    render(){
        console.log("render CompA")
        return <ComAA />
    }
}

class ComAA extends Component{
    componentDidMount(){
        console.log("新组件挂载 ComAA")
    }
    componentWillUnmount(){
        console.log("组件卸载 ComAA")
    }
    render(){
        console.log("render ComAA")
        return null
    }
}

class ComB extends Component{
    componentDidMount(){
        console.log("新组件挂载 ComB")
    }
    componentWillUnmount(){
        console.log("组件卸载 ComB")
    }
    render(){
        console.log("render ComB")
        return (
            <div>
                <ComBB />
                <h1>comb</h1>
            </div>
        )
    }
}

class ComBB extends Component{
    componentDidMount(){
        console.log("新组件挂载 ComBB")
    }
    componentWillUnmount(){
        console.log("组件卸载 ComBB")
    }
    render(){
        console.log("render ComBB")
        return null
    }
}