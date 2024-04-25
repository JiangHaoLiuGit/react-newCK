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
    
    handleClick = () => {
        this.refs.input.focus()
    }
    componentDidMount(){
        console.log(this.refs.comA.myA())
    }
    render(){
        return <>
            <div>
                <input type="text" ref='input' placeholder="请填写" />
                <button onClick={this.handleClick}>点击聚焦</button>
                <A ref="comA"/>
                <B/>
            </div>
        </>
    }
}