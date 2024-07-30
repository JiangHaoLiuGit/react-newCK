import React from 'react'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function News(props){
    let {params} = props.match 
    return <>
    {/* http://localhost:3000/news/2019/8/6 */}
        <h1>显示{params.year}年{params.month}月{params.day}日的新闻</h1>
    </>
}


function NotDefined(){
    return <h1>找不到地址</h1>
}

export default function Test(){
    return <>
        <Router>
            <Switch>
                <Route path="/news/:year?/:month?/:day?" component={News} />
                <Route component={NotDefined} />
            </Switch>
        </Router>
    </>
}