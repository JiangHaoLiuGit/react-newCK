import React, { Component } from 'react'

export default class ErrorComp extends Component {
    state = {
        isShow:false
    }
    static getDerivedStateFromError(){
        console.log("发生错误了")
        return {
            isShow:true
        }
    }
    // componentDidCatch(){
    //     // 这里能适合做ajax请求,这里因为要setState渲染两次render,所以效率不高,一般推荐用上面静态的
    //     console.log("componentDidCatch")
    //     this.setState({
    //         isShow:true
    //     })
    // }
  render() {
    return <>
        <div>
            {!this.state.isShow ? this.props.children:''}
        </div>
    </>
  }
}
