import React from 'react'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

// 地址 http://localhost:3000/a
function A(props){
    console.log(props)
    return <>
        <h1>组件A</h1>
        <button onClick={()=>props.history.push("/b")}>跳转b</button>
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