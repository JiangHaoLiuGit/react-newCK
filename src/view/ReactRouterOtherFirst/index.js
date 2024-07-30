import React from 'react'
import {BrowserRouter as Router , Route , NavLink , Redirect , Switch} from 'react-router-dom'
import './index.css'
function PageA(props){
    return <h1>页面A</h1>
}

function PageC(props){
    return <h1>页面C</h1>
}

function PageB(props){
    return <h1>页面B</h1>
}

function Tabs(props){
    return <>
        <NavLink activeStyle={{
            fontSize:"40px"
        }} activeClassName="haoYu" innerRef={node=>{
            node.style.marginRight = '20px'
        }} to="/a">页面A</NavLink>
        <NavLink replace activeClassName="haoYu" to={{
            pathname:"/b",
            hash:"#abc",
            search:"?a=1&b=2"
        }}>页面B</NavLink>
    </>
}

export default function Test() {
  return (
    <div>
        
        <Router>
            <Tabs />
            <Switch>
                <Route path="/a" component={PageA}></Route>
                <Route path="/b" component={PageB}></Route>
                <Redirect to="/a" />
                {/* <Route component={PageA}></Route> */}
            </Switch>
        </Router>
      
    </div>
  )
}
