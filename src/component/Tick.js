import React from 'react'

export default class Tick extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number:props.number
        }
        this.timer = setInterval(()=>{
            if(this.state.number === 1){
                clearInterval(this.timer)
                this.props.over && this.props.over()
            }
            this.setState({
                number:this.state.number-1
            })
        },1000)
    }
    render(){
        return <>
            <h1 onClick={this.props.onClick}>倒计时:{this.state.number}</h1>
        </>
    }
}