import React from 'react'
import Tick from './Tick.js'

export default class TickControl extends React.Component{
    state={
        isOver:false
    }
    constructor(props){
        super(props)
        // this.handlerOver = this.handlerOver.bind(this)
        // this.handlerOnClick = this.handlerOnClick.bind(this)
    }
    // handlerOver(){
    //     // 这样写的话this指向会出问题,可以通过bind来改变this指向,或者最简单箭头函数
    //     this.setState({
    //         isOver:true
    //     })
    // }
    handlerOver = ()=>{
        this.setState({
            isOver:true
        })
    }
    // handlerOnClick(e){
    //     console.log("点击",e)
    // }
    handlerOnClick = (e) => {
        console.log("点击",e)
    }
    render(){
        let text = null
        if(this.state.isOver){
            text = <h2>已经结束</h2>
        }else{
            text = <h2>正在进行中</h2>
        }
        return <>
            <Tick number={5} over={this.handlerOver} onClick={this.handlerOnClick}/>
            {text}
        </>
    }
}