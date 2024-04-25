import React from 'react'

class A extends React.Component{
    myA(){
        return "myA"
    }
    render(){
        return <>
            <h1>组件A</h1>
        </>
    }
}
function B(){
    return <>
        <h1>组件B</h1>
    </>
}

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.txt = React.createRef()
        this.comA = React.createRef()
    }
    handleClick = () => {
        this.txt.current.focus()
    }
    componentDidMount(){
        console.log(this.comA.current.myA())
    }
    render(){
        return <>
            <div>
                <input type="text" ref={this.txt} placeholder="请填写" />
                <button onClick={this.handleClick}>点击聚焦</button>
                <A ref={this.comA} />
                <B/>
            </div>
        </>
    }
}