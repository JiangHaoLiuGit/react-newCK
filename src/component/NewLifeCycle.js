import React from 'react'

export default class NewLifeCycle extends React.Component{
    state = {
        n:6
    }
    constructor(props){
        super(props)
        console.log("constructor")
    }
    static getDerivedStateFromProps(nextProps,PrevState){
        console.log("静态 getDerivedStateFromProps")
        console.log("nextProps",nextProps,"PrevState",PrevState)
        return null
    }
    componentDidMount(){
        console.log("componentDidMount,组件挂载完成")
    }
    

    // state或者props改变都会触发这个更新函数
    shouldComponentUpdate(newProps,newState){
        console.log("newProps",newProps)
        console.log("newState",newState)
        return true
    }

    getSnapshotBeforeUpdate = (preProps,prevState) =>{
        console.log("preProps",preProps)
        console.log("prevState",prevState)
        return 132
    }
    componentDidUpdate(prevProps,prevState,snap){
        console.log("componentDidUpdate",snap)
        console.log(prevProps,prevState)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount,组件销毁")
    }

    render(){
        console.log("render")
        return (
            <>
            <h1>n::{this.state.n}</h1>
            <button onClick={()=>{
                this.setState({
                    n:this.state.n+1
                })
            }}>n+1</button>
        </>
        )
    }
}