import React from 'react'

export default class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            n:props.n
        }
        console.log("生命周期开始第一步,constructor")
    }
    componentWillMount(){
        console.log("生命周期第二步,componentWillMount")
    }
    componentDidMount(){
        console.log("生命周期第四步,componentDidMount")
        // fetch("https://xxx").then(resp=>resp.json()).then(res=>{
        //     res.data
        // })
    }
    componentWillReceiveProps(newProps){
        console.log("生命周期第五步,componentWillReceiveProps,接受新的属性值:",newProps,";以及旧的属性值:",this.props)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("生命周期第六步,shouldComponentUpdate","最新的props",nextProps,";最新的state:",nextState)
        if(nextProps.n == this.props.n && nextState.n == this.state.n){
            return false
        }else{
            return true
        }
    }
    componentWillUpdate(nextProps,nextState){
        console.log("生命周期第七步,componentWillUpdate,组件即将渲染",nextProps,nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("生命周期第八步,componentDidUpdate,组件已经完成渲染",prevProps,prevState)
    }

    componentWillUnmount(){
        console.log("生命周期第九步,componentWillUnmount,组件已经被销毁")
    }

    render(){
        console.log("生命周期第三步,render,返回的虚拟DOM会经过ReactDOM转化成真实DOM挂载到html")
        return <>
            <h1>属性n:{this.props.n}</h1>
            <h1>状态n:{this.state.n}</h1>
            <br/>
            <button onClick={
                ()=>{
                    this.setState({
                        n:this.state.n+1
                    })
                }
            }>
                状态N+1
            </button>
        </>
    }
}