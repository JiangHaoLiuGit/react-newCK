import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        work:[
            ()=>{
                console.log("第1次")
                this.sleep(20)
            },
            ()=>{
                console.log("第2次")
                this.sleep(20)
            },
            ()=>{
                this.sleep(20)
                console.log("第3次")
            },
            ()=>{
                this.sleep(20)
                console.log("第4次")
            },
            ()=>{
                this.sleep(20)
                console.log("第5次")
            },
        ]
    }
    componentDidMount=()=>{
        // this.sleep(2000)
        window.requestAnimationFrame(this.start)
        console.log(this.state.work)
        console.log(this.state.work.length)
        window.requestIdleCallback(this.working)
    }
    start = () =>{
        console.log(2)
        window.requestAnimationFrame(this.start)
    }
    sleep(time){
        let startTime = Date.now()
        while(Date.now() - startTime < time){

        }
    }
    working = (dealine)=>{
        console.log("当前剩下多少空闲的时间:毫秒/ms",dealine.timeRemaining())
        let works = this.state.work
        if(dealine.timeRemaining() > 0 && works.length>0){
            this.spliceWorks()
        }
        if(works.length>0){
            window.requestIdleCallback(this.working)
        }
    }
    spliceWorks = () => {
        let work = this.state.work.shift()
        work()
    }
  render() {
    return (
      <div>
        window.requestIdleCallback()
      </div>
    )
  }
}
