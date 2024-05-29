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
            bg:this.props.bg || "#f40"
        }
        let timing = 16
        setInterval(()=>{
            // x轴上16毫秒移动的距离
            let xMove = this.state.xSpeed * timing / 1000
            // y轴上16毫秒移动的距离
            let yMove = this.state.ySpeed * timing / 1000
            // 16毫秒后的横坐标
            let newLeft = this.state.x + xMove
            // 16毫秒后的纵坐标
            let newTop = this.state.y + yMove
            if(newLeft < 0){
                // 此时移动到了屏幕左侧
                newLeft = 0
                // 解决方案:小球拉回左侧,以及再给他一个相反的速度
                this.setState({
                    xSpeed:-this.state.xSpeed
                })
            }else if(newLeft >= window.document.documentElement.clientWidth - 100){
                // 此时移动到了屏幕右侧
                // 解决方案:强制把小球拉回最右侧,以及再给他一个相反的速度
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
        },timing)
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