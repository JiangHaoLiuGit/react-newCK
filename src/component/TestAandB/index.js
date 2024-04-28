import React from 'react'

export class A extends React.Component{
    // {/* 6.0此时其实父组件能通过refA访问到该组件了,所以创建createRef就能访问该组件的input */}
    refInput = React.createRef()
    componentDidMount = () => {
        console.log(this.refInput)
    }
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