import React from 'react'

export class A extends React.Component{
    render(){
        return <>
            <h1>我是A,{this.props.a}</h1>
        </>
    }
}

export class B extends React.Component{
    render(){
        return <>
            <h1>我是B,{this.props.b}</h1>
        </>
    }
}