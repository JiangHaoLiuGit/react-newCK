import React from 'react'

export default class Comp extends React.Component{
    state = {
        n:0
    }
    constructor(props){
        super(props)
    }
    handler = () => {
        // 只会执行一次
        // this.setState({
        //     n:this.state.n+1
        // })
        // this.setState({
        //     n:this.state.n+1
        // })
        // this.setState({
        //     n:this.state.n+1
        // })
        this.setState(prev=>{
            return {
                n:this.state.n+1
            }
        })
        this.setState(cur => ({
            n:cur.n+1
        }))
        this.setState(cur => ({
            n:cur.n+1
        }))
    }
    render(){
        console.log("render")
        return <>
            <h1>{this.state.n}</h1>
            <button onClick={this.handler}>+</button>
        </>
    }
}