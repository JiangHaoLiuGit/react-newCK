import React from 'react'
import {NavLink} from 'react-router-dom'

export function navPage() {
  return (
    <div className='nav'>
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/news">新闻页</NavLink>
      <NavLink to="/personal">个人中心</NavLink>
    </div>
  )
}

export function Home(){
    return <div className='home'><h1>首页</h1></div>
}

export function News(){
    return <div className='news'><h1>新闻页</h1></div>
}

export function Personal(){
    return <div className='personal'><h1>个人中心</h1></div>
}
