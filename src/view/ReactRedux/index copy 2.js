import React from 'react'
import {store} from '../../store'
import {sendActive} from '../../store/active'
// https://www.bilibili.com/video/BV1rE411L7cY?p=6&vd_source=7da8147de64aaef196cda1bab236cccb
export default class Test extends React.Component{
    constructor(props){
        super(props)
        
    }
    handleClick(){
        let active = sendActive()
        store.dispatch(active)
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        return <>
            <h1>{store.getState().str}</h1>
            <button onClick={this.handleClick}>修改值</button>
        </>
    }
}