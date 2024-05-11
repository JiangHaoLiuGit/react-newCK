import React from 'react'
// import Test from './view/Rendering1'

export default class App extends React.Component{
    state = {}
    constructor(props){
        super(props)
        console.log("1,constructor App")
    }
    static getDerivedStateFromProps(props,state){
        console.log("2, static getDerivedStateFromProps App")
        return null
    }
    componentDidMount(){
        console.log("a, componentDidMount App")
    }
    render(){
        console.log("3, render App")
        return(
            <>
                <h1>App</h1>
                {/* {{name:"江浩",age:18}} */}
                {/* <Test></Test> */}
                <Com />
            </>
        )
    }
}

class Com extends React.Component{
    state = {}
    constructor(props){
        super(props)
        console.log("4, constructor Com")
    }
    static getDerivedStateFromProps(props,state){
        console.log("5, static getDerivedStateFromProps Com")
        return null
    }
    componentDidMount(){
        console.log("b componentDidMount Com")
    }
    render(){
        console.log("6, render Com")
        return(
            <>
                <h1>Com</h1>
            </>
        )
    }
}