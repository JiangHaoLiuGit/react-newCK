import React from 'react'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function A(props){
    console.log(props)
    return <>
        <h1>组件A</h1>
        {/* 如果要跳百度 props.history.push("https://www.baidu.com") 不行,必须得用window.location.href跳转 */}
        <button onClick={()=>props.history.push("/b",'你好,我是组件A')}>跳转b</button>
    </>
}


function B(props){
    console.log(props)
    return <>
        <h1>组件B</h1>
        <button onClick={()=>props.history.push("/a")}>跳转A</button>
    </>
}

function NotDefined(){
    return <h1>找不到地址</h1>
}

export default function Test(){
    return <>
        <Router>
            <Switch>
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
                <Route component={NotDefined} />
            </Switch>
        </Router>
    </>
}