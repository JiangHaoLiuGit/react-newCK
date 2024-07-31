import React , {Component} from 'react'
import {withRouter , BrowserRouter as Router} from 'react-router-dom'

let location , preLocation , action , unListen , unBlock;

class NullCom extends Component{
    componentDidMount(){
        // 添加一个拦截器
        unBlock = this.props.history.block((loc , ac)=>{
            preLocation = this.props.location
            location = loc
            action = ac
            return ''
        })
        // 添加的一个监听器
        unListen = this.props.history.listen((locations,actions)=>{
            if(this.props.onChange){
                this.props.onChange(this.props.location , locations , actions , unListen)
            }
        })
    }
    componentWillUnmount(){
        //卸载阻塞器
        unBlock()
        //卸载监听器
        unListen()
    }
    render(){
        return null
    }
}

const Comp = withRouter(NullCom)

class RouterGuard extends Component{
    
    handleConfirm = (msg , ballBack) =>{
        if(this.props.onBeforeChange){
            this.props.onBeforeChange(preLocation , location , action , ballBack , unBlock)
        }else{
            ballBack(true)
        }
    }
    render(){
        return <Router getUserConfirmation={this.handleConfirm}>
            <Comp onChange={(preName , locationName , action , unListen)=>{
                console.log(`日志9:从${preName.pathname}进到${locationName.pathname},方式是${action}`)
                unListen()
            }}/>
            {this.props.children}
        </Router>
    }
}
export default RouterGuard