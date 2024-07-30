import React from 'react'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import queryString from 'query-string'

function A(props){
    console.log(props.location)
    console.log(props.location.search)
    console.log(queryString.parse(props.location.search))
    return <>
    {/* http://localhost:3000/a?a=1&b=2&c=3#abc */}
        <h1>组件A 精确</h1>
        <h1>路径名称:{props.location.pathname}</h1>
        <h1>哈希名称:{props.location.hash}</h1>
        <h1>search:{props.location.search}</h1>
    </>
}


function NotDefined(){
    return <h1>找不到地址</h1>
}

export default function Test(){
    return <>
        <Router>
            <Switch>
                {/* exact 精确匹配,注意:精确匹配的是路径!如果是location:3000/a#abc这个时候会匹配a组件吗? */}
                {/* 会的,因为此时路径还是/a */}
                <Route path="/a" exact component={A} />
                <Route component={NotDefined} />
            </Switch>
        </Router>
    </>
}