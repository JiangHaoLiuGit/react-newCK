import React from 'react'
import {Switch,Route,BrowserRouter as Router,withRouter} from 'react-router-dom'
const AWrapper = withRouter(A)
function News(props){
    return <>
        <h1>显示新闻组件</h1>
        <AWrapper/>
    </>
}

function A(props){
    console.log(props)
    return <>
        <button onClick={()=>{
            props.history.push("/")
        }}>回首页</button>
    </>
}

function index(){
    return <>
        <h2>首页</h2>
    </>
}

function NotDefined(){
    return <h1>找不到地址</h1>
}

export default function Test(){
    return <>
        <Router>
            <Switch>
                <Route path="/news" component={News} />
                {/* <Route path={["/news","/n","/news/:year(\d+)?/:month(\d+)?/:day(\d+)?/*"]} component={News} /> */}
                <Route path="/" component={index} />
                <Route component={NotDefined} />
            </Switch>
        </Router>
    </>
    
}