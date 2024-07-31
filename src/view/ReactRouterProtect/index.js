import React from 'react'
import {BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom'

import ProtectRouter from './ProtectRouter'
import Login from './Login'
import Personal from './Personal'
import Home from './Home'

// 受保护的路由
export default function Test() {
  return (
    <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/login">登录页</Link></li>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/personal">个人中心</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <ProtectRouter path="/personal" component={Personal}></ProtectRouter>
                    <Route component={Home}></Route>
                </Switch>
            </div>
        </Router>
    </div>

  )
}
