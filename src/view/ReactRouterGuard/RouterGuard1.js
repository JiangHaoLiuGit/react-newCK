import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
class RouterGuard extends Component{
    componentDidMount(){
        // 添加的一个监听器
        // this.props.history.listen上面的方法是监听路由地址变化的方法
        this.unListen = this.props.history.listen((location,action)=>{
            console.log("监听地址变化",action)
            let preLocation = this.props.location.pathname
            console.log(preLocation)
            if(this.props.onChange){
                this.props.onChange(preLocation , location.pathname , action , this.unListen)
            }
        })

        // 添加一个拦截器
        this.props.history.block("真的要跳转页面吗?")
    }
    componentWillUnmount(){
        //卸载监听器
        this.unListen()
    }

    render(){
        return this.props.children
    }
}

export default withRouter(RouterGuard)