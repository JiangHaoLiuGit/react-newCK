import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
function UserCom(){
    return <>
        <h1>我是User组件</h1>
        <div>
            <Link to="/user/info">用户信息</Link>
            <Link to="/user/pay">充值</Link>
        </div>
        <div>
            <Route></Route>
        </div>
    </>
}

export default function Test() {
  return (
    <div>
      <h1>嵌套路由</h1>
    </div>
  )
}
