import React from 'react'

export class A extends React.Component{
    refInput = React.createRef()
    render(){
        return <>
            <h1>我是A,{this.props.a}</h1>
            <input type="text" ref={this.refInput} />
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