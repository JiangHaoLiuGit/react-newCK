import React from 'react'
import NewLifeCycle from './component/NewLifeCycle.js'

export default class App extends React.Component{
    state = {
        n:1,
        show:true
    }
    constructor(props){
        super(props)
        
    }
    add = ()=>{
        this.setState({
            n:this.state.n+1
        })
    }
    render(){
        const comp = this.state.show?<NewLifeCycle isN={this.state.n}/>:null
        return <>
            {comp}
            <br />
            <button style={{
                marginTop:"20px"
            }} onClick={this.add}>App属性N+1</button>

            <br />
            <button style={{
                marginTop:"20px"
            }} onClick={()=>{
                this.setState({
                    show:!this.state.show
                })
            }}>
                隐藏/创建
            </button>
        </>
    }
}