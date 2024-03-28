import React from 'react'

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tim:this.props.number
        }
        this.time = setInterval(()=>{
            this.setState({
                tim:this.state.tim-1
            })
            if(this.state.tim<=1){
                clearInterval(this.time)
            }
        },1000)
    }
    render(){
        return <>
            <h1>倒计时:{this.state.tim}</h1>
            <A number={this.state.tim}/>
        </>
    }
}

function A(props){
    return <>
        <h2>我是A组件:{props.number}</h2>
        <B num={props.number}/>
    </>
}
function B(props){
    return <>
    <h3>我是B组件{props.num}</h3>
    </>
}