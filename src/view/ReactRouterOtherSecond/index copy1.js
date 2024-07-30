import React from 'react'
import {BrowserRouter as Router , Route , Link , NavLink , Redirect , Switch} from 'react-router-dom'
import './index.css'
import {routerConfig} from './routerConfig'
function UserCom(props){
    return <>
        <h1>我是User组件</h1>
        <div className='tabs'>
          {/*  innerRef={node=>{
              node.style.marginRight = "20px"
            }} */}
            <NavLink to={routerConfig.user.info}>用户信息</NavLink>
            <span> / </span>
            <NavLink to={routerConfig.user.pay}>充值</NavLink>
        </div>
        <div className="router">
          <Route path={routerConfig.user.info}  component={UserInfo}></Route>
          <Route path={routerConfig.user.pay}  component={UserPay}></Route>
        </div>

    </>
}

function UserInfo(){
  return <h1>用户基础信息</h1>
}

function UserPay(){
  return <h1>充值活动</h1>
}

export default function Test() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={routerConfig.user.root} component={UserCom}></Route>
          <Redirect to={routerConfig.user.root}/>
        </Switch>
      </Router>
    </div>
  )
}
