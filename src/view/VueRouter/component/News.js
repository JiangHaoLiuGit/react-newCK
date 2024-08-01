import React from 'react'
import BetterLink from '../BetterLink'
export default function News(props) {
  return (
    <div>
      <nav>
        <BetterLink to={{name:"newsHome"}}>新闻首页</BetterLink>
        <BetterLink to={{name:"newsDetail"}}>新闻详情</BetterLink>
        <BetterLink to={{name:"newsSearch"}}>新闻搜索</BetterLink>
      </nav>
      <div>
        {props.children}
      </div>
    </div>
  )
}
