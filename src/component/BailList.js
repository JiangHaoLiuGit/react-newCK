import React from 'react'
import {random} from '../utils/random.js'
import Bail from './Bail.js'

export default class BailList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number:this.props.number || 10,
            bailList:[]
        }
        this.timer = setInterval(()=>{
            let info = {
                x:random(0,document.documentElement.clientWidth-100),
                y:random(0,document.documentElement.clientHeight-100),
                xSpeed:random(50,500),
                ySpeed:random(50,500),
                bg:`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
            }
            if(this.state.number<=0){
                clearInterval(this.timer)
            }
            
            this.setState({
                number:this.state.number-1,
                bailList:[...this.state.bailList,info]
            })
            
        },1000)
    }
    render(){
        let item = this.state.bailList.map((item,i) => <Bail key={i} {...item}/>)
        return (
            <>
                {item}
            </>
        )
    }
}