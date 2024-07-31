import React from 'react'
import data from './isLogin'
export default function Home(props) {
  return (
    <div>
      <h1>我是用户详情页</h1>
      <h1>我是刘江浩,看到这里说明已经完成登录</h1>
      <button onClick={()=>{
        data.loginOut()
        console.log(props)
        // props.history.push("/personal")
      }}>退出登录</button>
    </div>
  )
}
