import React, { PureComponent } from 'react'
import TaskList from './TaskList'
import TaskAdd from './TaskAdd'
export default class Test extends PureComponent {
    state = {
        sku:[]
    }
    componentDidMount(){
        let sku = []
        for(let i = 1 ; i <= 10 ; i++){
            sku.push({
                name:`事件${i}`,
                isFinite:Math.random()>0.5
            })
        }
        this.setState({
            sku:sku
        })
    }
    hanlderChangeList=obj=>{
        this.setState({
            sku:[...this.state.sku,obj]
        })
        
        // this.state.sku.push(obj)
        // this.setState({
        //     sku:this.state.sku
        // })
        // 上面这种写法在纯函数下面无效,因为之前的sku数组对应的地址没有发生变化,所以在纯函数PureComponent中发现两个数组地址是一至所以认为没有变化所以不会重新render,如果你重新生命一个list覆盖掉之前的sku,即sku = list的时候引用地址变了,纯函数PureComponent会认为变化了,所以才会重新render,所以,最好是sku:[...this.state.sku,obj],或者this.state.sku.concat(obj)

    }
  render() {
    console.log("index.js render")
    return (
      <div>
        <TaskAdd 
        hanlderChangeList={this.hanlderChangeList} />
        <TaskList sku={this.state.sku} />
      </div>
    )
  }
}
