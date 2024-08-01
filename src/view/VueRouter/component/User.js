import React from 'react'
import BetterLink from '../BetterLink'
export default function News(props) {
  return (
    <div>
      <nav>
        <BetterLink to={{name:"userHome"}}>用户首页</BetterLink>
        <BetterLink to={{name:"userList"}}>用户列表</BetterLink>
      </nav>
      <div>
        {props.children}
      </div>
    </div>
  )
}
