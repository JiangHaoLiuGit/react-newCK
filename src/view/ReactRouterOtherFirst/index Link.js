import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
// import Link from './Link'

function PageA(props){
    return <h1>页面A</h1>
}

function PageB(props){
    return <h1>页面B</h1>
}

function Tabs(props){
    return <>
        <Link innerRef={node=>{
            node.style.marginRight = '20px'
        }} to="/a">页面A</Link>
        <Link to={{
            pathname:"/b",
            hash:"#abc",
            search:"?a=1&b=2"
        }}>页面B</Link>
    </>
}

export default function Test() {
  return (
    <div>
        
        <Router>
            <Tabs />
            <Route path="/a" component={PageA}></Route>
            <Route path="/b" component={PageB}></Route>
        </Router>
      
    </div>
  )
}
