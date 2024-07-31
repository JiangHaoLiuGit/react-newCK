import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import RouterGuard from './RouterGuard1'

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
      <Router
        getUserConfirmation={(msg,callback) => callback(window.confirm(msg))}
      >
        <ul>
            <li>
                <Link to="/page1">页面1</Link>
            </li>
            <li>
                <Link to="/page2">页面2</Link>
            </li>
        </ul>
      
        <RouterGuard onChange={(preName , locationName , action , unListen)=>{
            num++
            console.log(`日志${num}:从${preName}进到${locationName},方式是${action}`)
            if(num >= 5){
                unListen()
            }
        }}>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
        </RouterGuard>
      </Router>
    </div>
  )
}
