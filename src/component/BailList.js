import React from 'react'
import {random} from '../utils/random.js'
import Bail from './Bail.js'

export default class BailList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number:this.props.number || 10,
            bailList:[],
            timers:100,
            tasks:new Array(100).fill(this.delay),
            stateName:"本次耗时:毫秒"
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
    delay = () => {
        const duration = 5
        const start = Date.now()
        while(Date.now() - start < duration){}
    }
    btnClick = async () => {
        this.setState({
            stateName:"执行中"
        })
        const start = Date.now()
        await Promise.all(this.state.tasks.map((it,index) => this.runTask(it,index)))
        const end = Date.now()
        this.setState({
            stateName:`执行完成,耗时: ${end - start} 毫秒`
        })
    }
    // runTask怎么封装,剩下任务交给你
    // 大厂面试题 => 运行一个耗时任务
    // 如果要异步执行,请返回Promise
    // 一定要尽快完成任务,同时不能让页面卡顿(小球得动不能卡)
    // 尽量兼容更多浏览器
    runTask = (task,i) => {
        
        console.log("setTimout",i);
        // 使用微任务队列处理
        // return Promise.resolve().then(task())
        // queueMicrotask(task)

        // 同步执行,同步也会造成阻塞,
        // setTimeout(task)

        // 使用时间分片处理
        return new Promise((resolve,reject)=>{
            this._run(resolve,task)
        })
    }
    _run = (callBack,fn) => {
        if(window.requestIdleCallback != undefined){
            requestIdleCallback((dealine)=>{
                // 判断当前时间帧剩余时间是不是足够的
                if(dealine.timeRemaining() > 0){
                    fn()
                    if(callBack){
                        callBack()
                    }else{
                        throw new Error("未找到回调函数,请重试")
                    }
                }else{
                    // 下一递归调用
                    this._run(fn,callBack)
                }
            })
        }else{
            // 逻辑不太对,页面会卡死,一直走的是else
            const start = performance.now()
            requestAnimationFrame(()=>{
                // 判断当前时间帧剩余时间是不是足够的
                if(performance.now() - start < 6){
                    fn()
                    callBack()
                }else{
                    // 下一递归调用
                    console.log("老弟,你不能一直来这里吧?");
                    this._run(fn,callBack)
                }
            })
        }
        
            
    }
    // 1000次循环runTask
    render(){
        
        let item = this.state.bailList.map((item,i) => <Bail key={i} {...item}/>)
        return (
            <div className='timers'>
            <p>{this.state.stateName}</p>
            <button onClick={this.btnClick}>开始</button>
                {item}
            </div>
        )
    }
}