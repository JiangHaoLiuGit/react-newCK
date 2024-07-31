import React from 'react'
import data from './isLogin'
import queryString from 'query-string'
export default function Login(props) {
  return (
    <div>
      <h1>登录页</h1>
      <button onClick={()=>{
        console.log(props)
        data.login()
        // 使用地址栏登录参数传参
        // let obj = queryString.parse(props.location.search)
        // obj.loginUrl ? props.history.push(obj.loginUrl):props.history.push("/")
        // 地址栏没有显示登录后跳转到哪里,而是吧信息藏到了location中的state中,有点像vue的params传参
        props.location.state&&props.location.state.loginUrl?props.history.push(props.location.state.loginUrl):props.history.push("/")
      }}>登录</button>
    </div>
  )
}

