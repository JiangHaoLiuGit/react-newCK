import React,{Component} from 'react'

export default class Tick extends Component{
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
        return <h1>倒计时:{this.state.tim}</h1>
    }
}