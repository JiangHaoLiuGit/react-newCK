import React from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

function A(props){
    return <>
    <h1>组件A</h1>
    <button onClick={()=>{
        props.history.push({
            pathname:"/a/b",
            state:{name:"tom",age:20}
        })
    }}>To B</button>
    </>
}   

function B(props){
    console.log(props)
    let search = props.location.state
    return <>
        <h1>组件B</h1>
        <h3>name:{search.name}</h3>
        <h3>age:{search.age}</h3>
    </>
}

function C(){
    return <h1>组件C</h1>
}

function D(){
    return <h1>组件D</h1>
}
function fourPage(){
    return <h1>找不到该页面</h1>
}


export default function Test(){
    return <>
        <Router>
            <Switch>
                <Route path="/a" exact component={A} />
                <Route path="/a/b" exact component={B} />
                <Route path="/a/c" exact component={C} />
                <Route component={fourPage} />
            </Switch>
        </Router>
    </>
}