import React from 'react'
import {BrowserRouter as Router ,Link} from 'react-router-dom'
import RouterView from './RouterView'
import BetterLink from './BetterLink'
import './index.css'
export default function Test() {
  return (
    <Router>
        <div>
            <BetterLink to={{name:"home"}}>首页</BetterLink>
            <BetterLink to={{name:"news"}}>新闻</BetterLink>
            <BetterLink to={{name:"user"}}>个人中心</BetterLink>
            {/* <Link to="/">首页</Link> */}
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </Router>
  )
}
