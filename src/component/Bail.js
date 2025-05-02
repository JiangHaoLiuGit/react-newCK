import React ,{Component} from 'react'
import './bail.css'

export default class Bail extends Component{
    // 遇到的bug,小球闪烁,忽左忽右,为什么呢?其实是计时器同时存在多个,没有注意及时清理剩余的计时器导致的
    constructor(props){
        super(props)
        this.state = {
            x:this.props.x || 0,
            y:this.props.y || 0,
            // 横坐标的速度(一秒移动的坐标)
            xSpeed:this.props.xSpeed,
            // 纵坐标的速度
            ySpeed:this.props.ySpeed,
            bg:this.props.bg || "#f40",
            timing:16
        }
        setInterval(()=>{
            // 性能优化点
            requestAnimationFrame(this.animate)
        },this.state.timing)
    }
    
    
    animate = () =>{
        // x轴上移动的距离
        let xMove = this.state.xSpeed * this.state.timing / 1000
        // y轴上移动的距离
        let yMove = this.state.ySpeed * this.state.timing / 1000
        let newLeft = this.state.x + xMove
        let newTop = this.state.y + yMove
        if(newLeft < 0){
            newLeft = 0
            this.setState({
                xSpeed:-this.state.xSpeed
            })
        }else if(newLeft >= window.document.documentElement.clientWidth - 100){
            newLeft = window.document.documentElement.clientWidth - 100
            this.setState({
                xSpeed:-this.state.xSpeed
            })
        }
        if(newTop < 0){
            newTop = 0
            this.setState({
                ySpeed:-this.state.ySpeed
            })
        }else if(newTop >= window.document.documentElement.clientHeight - 100){
            // this.state.x = window.document.body.clientWidth - 100
            newTop = window.document.documentElement.clientHeight - 100
            this.setState({
                ySpeed:-this.state.ySpeed
            })
        }
        
        this.setState({
            x:newLeft,
            y:newTop
        })
        
    }
    render(){
        return (
            <div className="bail" style={{
                backgroundColor:this.state.bg,
                left:this.state.x,
                top:this.state.y
            }}>

            </div>
        )
    }
}