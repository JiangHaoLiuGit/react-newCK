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
        this.txt.focus()
    }
    componentDidMount(){
        console.log(this.comA.myA())
    }
    render(){
        return <>
            <div>
                <input type="text" ref={el => this.txt = el} placeholder="请填写" />
                <button onClick={this.handleClick}>点击聚焦</button>
                <A ref={el => this.comA = el} />
                <B/>
            </div>
        </>
    }
}