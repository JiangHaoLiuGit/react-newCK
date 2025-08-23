import React from 'react'
import {BrowserRouter as Router , Route , Link , Switch , Redirect} from 'react-router-dom'

// import ProtectRouter from './ProtectRouter'
import Login from './Login'
import Personal from './Personal'
import Home from './Home'
import News from './News'
import withisLogin from '../../HOC/withisLogin'

let IsLogin = withisLogin(News)
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
                    <li><Link to="/news">新闻页面</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Home}></Route>
                    {/* <ProtectRouter path="/personal" component={Personal}></ProtectRouter> */}
                    <IsLogin path="/personal" component={Personal}></IsLogin>
                    <IsLogin path="/news" component={News}></IsLogin>
                    <Redirect from="/*" to="/"></Redirect>
                </Switch>
            </div>
        </Router>
    </div>

  )
}
