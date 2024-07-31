import React from 'react'
import {Route , Link} from 'react-router-dom'
import RouterGuard from './RouterGuard'

function Page1(){
    return <h1>页面1</h1>
}

function Page2(){
    return <h1>页面2</h1>
}

let num = 0

export default function Test() {
  return (
    <div>
      <h1>Router 导航守卫</h1>
        <RouterGuard 
            onBeforeChange={(preLocation , location , action , callBack , unBlock)=>{
                console.log(`日志:从${preLocation.pathname}到${location.pathname},跳转方式为${action}`)
                callBack(true)
                unBlock()
            }}
            
        >
            <ul>
                <li>
                    <Link to="/page1">页面1</Link>
                </li>
                <li>
                    <Link to="/page2">页面2</Link>
                </li>
            </ul>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
        </RouterGuard>
    </div>
  )
}
